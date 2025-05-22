# Sandbox Access

## Overview

This file defines how users, developers, testers, or enterprise partners gain access to **FED’s sandbox environment** — a simulated environment for testing PacketPilot, CargoConnect, ELDA prompts, Whisper integration, and agent workflows **without affecting live data.**

This is ideal for:
- QA testers
- Demo mode users
- Developer contributors
- New dispatchers training safely
- Enterprises evaluating API compatibility

---

## Access Request Flow

```yaml
form:
  - name (required)
  - role:
      - dispatcher
      - developer
      - fleet admin
      - trainer
  - email (required)
  - reason_for_access:
      - evaluate features
      - test integration
      - build internal tools
      - simulate dispatch workflows
  - sandbox_duration:
      - 3 days
      - 7 days
      - 30 days (requires approval)
  - agree_to_terms: true
````

---

## What the Sandbox Includes

* Preloaded mock drivers, dispatchers, loads
* Fake broker onboarding forms (for PacketPilot)
* Read-only Whisper transcript logs
* Non-persistent MARK task queue
* Test endpoints for:

  * `GET /sandbox/loads`
  * `POST /sandbox/packet`
  * `POST /sandbox/whisper-screen`
  * `GET /sandbox/rate-memory`

---

## Limitations

* No real documents may be uploaded
* No outbound calls (e.g., Twilio muted, only simulated)
* No permanent storage — all logs wiped every 48 hours
* No write access to production APIs

---

## Smart Defaults

* All actions performed in sandbox mode are **tagged** with `source: sandbox` in the logs
* MARK automatically disables non-sandbox tools
* Whisper API is mocked locally with stub transcriptions
* DuckDB in-memory mode only

---

## Activation Email Example

```txt
Welcome to the FED Sandbox.

You have been granted access for 7 days.

Log in at: sandbox.fedispatching.com  
Docs: /docs/sandbox  
Your API key: SANDBOX-XXXXXX (read-only)

Questions? Contact support@fedispatching.com
```

---

## File Location
.project/docs/ELDA/onboarding/sandbox-access.md