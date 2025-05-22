# FED Dashboard — Call Logs & Transcripts

## 📞 Purpose

This screen allows dispatchers to view all broker call history and analyze transcripts via Whisper.

It supports:
- Call-by-call logs
- Whisper transcription overlays
- AI flagging for rate games, delays, or pressure tactics
- Exporting to JSON or internal memory

---

## 🔍 Sections & Components

### 1. Call History Table

- Columns:
  - Time
  - Broker Name
  - Dispatcher
  - Duration
  - Flags
  - Action (→ View Transcript)

Use:
```tsx
import { Table, Badge, Button, Timestamp } from 'ui/*'
````

Flags example:

```tsx
<Badge variant="destructive">Rate Pressure</Badge>
<Badge variant="warning">Callback Delay</Badge>
```

---

### 2. Transcript Review Modal

Triggered on click:

* Whisper-based transcript
* Keyword highlight (price, urgency, fake scarcity)
* Flag markers w/ timestamps
* Optional "Add to Memory" button

Use:

```tsx
import { Dialog, ScrollArea, TranscriptLine, MemoryButton } from 'ui/*'
```

---

### 3. Whisper Tools

Allow inline:

* Re-run transcription
* Download transcript
* Flag for dispute or review

---

## Example API Flow

```http
GET /api/fed/calls?limit=20
```

```json
[
  {
    "broker": "CH Robinson",
    "dispatcher": "Jesse",
    "duration": "4:13",
    "timestamp": "2025-05-19T14:30:00Z",
    "flags": ["Rate Pressure", "Stalling"],
    "id": "call-0911"
  }
]
```

```http
GET /api/fed/calls/call-0911/transcript
```

---

## Routing & File

* Path: `/dashboard/calls`
* File: `app/features/dashboard/calls.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/calls.md`

---

## Cursor Directives

> Cursor: Scaffold layout using table + dialog.
> Import badges for flags. Respect scroll performance on long transcripts.
> Avoid placeholder calls. Use mocked JSON data if needed.

---

## File Location
.project/docs/platforms/FED/dashboard/calls.md