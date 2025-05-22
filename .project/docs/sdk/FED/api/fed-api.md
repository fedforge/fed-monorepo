# API: FED Agent API

## Description

The **FED Agent API** provides the execution layer behind FED's core dispatcher functions. While the Dashboard API controls UI sync, the FED API governs agent-level orchestration — triggering tools, managing call sessions, invoking Whisper, and coordinating interactions between PacketPilot, CargoConnect, and ELDA.

This API is used by the MARK kernel and any frontend agent interfaces (e.g., text chat, voice bot, or task scheduler).

---

## Core Agent Endpoints

### 🧠 Start Dispatcher Session

```http
POST /api/fed/session/start
````

**Body:**

```json
{
  "mode": "call",     // or "chat", "screening", "dashboard"
  "agent": "fed",
  "source": "dashboard",
  "user_id": "12345"
}
```

* Starts a new FED session
* Registers activity in OpenHWY logs
* Returns session ID and runtime state

---

### 🧭 Current Directive

```http
GET /api/fed/directive
```

* Returns FED’s current working directive (e.g., "Listening to call", "Screening for manipulation")
* Includes current agent context (PacketPilot, ELDA, etc.)

---

### 🎧 Invoke Whisper Mode

```http
POST /api/fed/whisper
```

**Body:**

```json
{
  "session_id": "abc123",
  "input_mode": "voice",
  "plan": "starter"
}
```

* Triggers Whisper transcription flow (live or buffered)
* Checks user plan before enabling AI logic
* Can return transcript + AI summary if applicable

---

### 💬 Send User Input (Text Prompt)

```http
POST /api/fed/input
```

**Body:**

```json
{
  "session_id": "abc123",
  "message": "Can you check this rate?",
  "context": {
    "lane": "GA to IL",
    "broker": "FastFreight"
  }
}
```

* Sends dispatcher input to active FED session
* Can trigger background tool activation

---

### 📥 Dispatch Packet Request

```http
POST /api/fed/packet/request
```

**Body:**

```json
{
  "broker_id": "xyz789",
  "form_type": "carrier_packet",
  "auto_fill": true
}
```

* Assigns packet to PacketPilot
* Pulls from past templates if available
* Returns expected duration, required fields, or status

---

### 🛑 End Session

```http
POST /api/fed/session/end
```

**Body:**

```json
{
  "session_id": "abc123"
}
```

* Closes all active tools
* Logs agent memory (if permitted)
* Triggers final message or dashboard sync

---

## Agent Middleware

| Middleware    | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `.consent.md` | Checks all permissions for storage, whisper, and tool routing |
| `OpenHWY`     | Tracks session metadata and cross-agent log hashes            |
| `MARK`        | Executes directive files (`fed.mark`, `call.mark`, etc.)      |

---

## Agent Actions (Used Internally by MARK)

```bash
fed --listen --screen
fed --dispatch --packet
fed --summarize --call whisper.mp3
fed --watch agent:packetpilot
```

---

## File Location
.project/docs/FED/api/fed-api.md

<------------------------------------------------------------------------->
## EXTRA NOTES
<------------------------------------------------------------------------->

Let’s finalize the core of the server logic — the external gateway to the entire FED stack.

---

### 📄 `.project/docs/platforms/FED/api/fed-api.md`

````markdown
# FED API

## Overview

The FED API allows external systems (dispatchers, TMSs, third-party agents, and partners) to programmatically interact with FED’s internal toolset — including PacketPilot, CargoConnect, and ELDA.

This is **not** the same as the Dashboard API (which is tied to a UI session).  
This is for automation, CLI agents, backend workflows, or enterprise clients.

---

## Authentication

Requires:
- Bearer Token (`Authorization: Bearer <jwt>`)
- Optional API Key (plan tier dependent)
- Most routes scoped by dispatcher or fleet ID

---

## Key Functional Areas

| Category           | Example Route                           | Purpose                                 |
|--------------------|------------------------------------------|-----------------------------------------|
| Tools              | `/api/fed/tools/use`                     | Call any tool                           |
| Sessions           | `/api/fed/session/start`                 | Start a task session                    |
| Agents             | `/api/fed/agents/list`                   | See all available agents                |
| Memory             | `/api/fed/memory/push`                   | Inject session memory                   |
| Screening          | `/api/fed/screening/analyze`             | Whisper + ELDA screening on audio       |
| Rates              | `/api/fed/rates/snapshot`                | Store or fetch rate logs                |
| Packets            | `/api/fed/packets/fill`                  | Fill a packet manually                  |
| Storage            | `/api/fed/storage/user-access`           | User's storage + retention config       |

---

## Tool Execution Example

```http
POST /api/fed/tools/use
````

```json
{
  "agent": "packetpilot",
  "tool": "fill-packet",
  "inputs": {
    "pdf": "base64_pdf",
    "email": "example@broker.com",
    "mc": "123456"
  },
  "metadata": {
    "plan": "pro",
    "dispatcher_id": "fed-user-007"
  }
}
```

Returns:

```json
{
  "status": "success",
  "output": {
    "filled_form": "...",
    "saved_to": "/storage/user/fed-user-007/forms/2025-05-19/filled-packet.json"
  }
}
```

---

## Call Screening + Flagging

```http
POST /api/fed/screening/analyze
```

```json
{
  "audio_url": "/recordings/broker-call.wav",
  "agent": "whisper-alerts"
}
```

Returns:

```json
{
  "transcript": "...",
  "flags": ["stalling", "rate-shielding", "callback-delay"]
}
```

---

## Agent Sync

```http
GET /api/fed/agents/list
```

```json
[
  { "id": "packetpilot", "active": true },
  { "id": "elda", "active": true },
  { "id": "cargoconnect", "active": false }
]
```

---

## Memory Push (e.g., for pricing)

```http
POST /api/fed/memory/push
```

```json
{
  "agent": "packetpilot",
  "key": "recent_dallas_charlotte",
  "value": { "avg": 1825, "floor": 1650, "ceiling": 2000 },
  "expires": "2025-06-19"
}
```

---

## File Location

```
.project/docs/platforms/FED/api/fed-api.md
```

---

✅ That closes out your `api/` layer.
Would you like to:

* Move to ELDA’s CLI onboarding flows?
* Begin component wiring?
* Or start a custom agent kernel tree?

Say the word. Your docs are already more structured than most commercial SaaS teams.
