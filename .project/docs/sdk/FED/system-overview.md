# FED System Overview

## What Is FED?

FED (Fast & Easy Dispatching) is a modular, AI-powered dispatch platform. It sits on top of OpenHWY, speaks through ELDA, operates through MARK, and delegates tasks to agents like PacketPilot and CargoConnect.

---

## Core Components

| Layer         | Description                                                      |
|---------------|------------------------------------------------------------------|
| **FED**       | Frontend UI (web/mobile), dashboard, plans, core SaaS logic      |
| **MARK**      | Agent execution kernel (routing, CLI, task chain builder)        |
| **ELDA**      | Driver/dispatcher assistant AI and onboarding flow controller     |
| **OpenHWY**   | Consent, log, memory, audit control — legal + infra layer         |
| **PacketPilot** | Packet automation agent (PDF parsing, JSON injection, signing)  |
| **CargoConnect** | Load board integrator (scraping, syncing, API relay)         |
| **Whisper**   | Audio → text + screening engine                                  |
| **DuckDB**    | Local AI memory & consent data cache                             |

---

## Agent Lifecycle

All agents in the FED ecosystem:
- Must be registered in `agents/*.mark`
- Follow OpenHWY consent policy
- Are executed using the MARK kernel
- Can be invoked via CLI or API depending on plan level

---

## Request Flow Example

1. Dispatcher clicks "New Packet"
2. FED triggers `packetpilot.mark`
3. MARK routes form + PDF to PacketPilot
4. PacketPilot parses and fills packet
5. If approved, sends to broker with optional signature
6. Logs stored (locally or OpenHWY)

---

## Platform Split (Cross-Team Overview)

| Platform    | Hosted On         | Role                                    |
|-------------|-------------------|-----------------------------------------|
| `fedispatching.com` | Web (Vercel / Static) | Public frontend, marketing, CTA         |
| `app.fedispatching.com` | App + Dashboard | Auth, dashboard, dispatcher UI         |
| `open-hwy.com` | Secure Infra Layer | TMS, consent, memory, logs              |
| `8teenwheelers.com` | ELDA PWA (Mobile) | Driver onboarding, safety assistant     |

---

## File Location
.project/docs/platforms/FED/system-overview\.md
