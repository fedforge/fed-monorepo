# Testing Guide

## Purpose

This guide explains how to simulate core FED interactions for debugging, QA, and onboarding without relying on live infrastructure.

Ideal for:
- Developers creating new tools or agents
- Dispatchers onboarding and testing flows
- CLI and dashboard integration tests

---

## Simulating a Packet Flow

1. **Prepare Inputs**
   - Drop a sample PDF (ratecon, W9) into:
     ```
     ./test_inputs/packet/
     ```
   - Use a mock dispatcher profile:
     ```json
     {
       "company": "Mock Freight Co",
       "mc_number": "1234567",
       "email": "test@mock.com"
     }
     ```

2. **Run PacketPilot from CLI**

```bash
mark --marker agents/packetpilot.marker --input ./test_inputs/packet/ratecon.pdf
````

Expected output:

* `filled_packet.json` in `/test_outputs/packetpilot/`
* Log stored in `.mark/logs/[timestamp]/`

---

## Simulating a Call Flow (Whisper + ELDA)

1. Use a pre-recorded `.wav` file stored under:

```
/test_inputs/calls/
└── example-broker-call.wav
```

2. Run:

```bash
mark --marker tools/whisper-alerts.marker --input ./test_inputs/calls/example-broker-call.wav
```

Expected output:

* JSON summary of transcript + flagged negotiation tactics
* Alert suggestions from ELDA (if configured)

---

## Dashboard Sandbox Testing

To simulate UI flows:

* Load dashboard locally (`apps/web`)

* Use mock data injection via:

  ```ts
  import { mockDispatcher } from '@/mocks'
  ```

* Override API routes with:

  ```ts
  if (process.env.NEXT_PUBLIC_MOCK === 'true') {
    return mockDispatcher()
  }
  ```

---

## Consent & Logging Test

To test consent flows:

```bash
mark --marker agents/elda.marker --simulate-consent
```

Expected:

* Consent log entry in `.openhwy/ledger/elda/`
* Confirmation response or fallback denial

---

## Test Memory Injection

Use CLI flag:

```bash
mark --marker agents/packetpilot.marker --memory test-context.yaml
```

This will inject `test-context.yaml` into runtime memory before tool execution.

---

## Files Used in Testing

```
/test_inputs/
  ├── calls/
  ├── packet/
  └── profiles/

/test_outputs/
  └── packetpilot/
```

---

## File Location
.project/docs/platforms/FED/testing-guide.md