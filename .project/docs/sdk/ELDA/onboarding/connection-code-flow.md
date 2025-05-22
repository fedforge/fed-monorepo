# Connection Code Flow

## Overview

The **Connection Code Flow** is how users link themselves to an existing dispatcher, fleet, broker, or training instance using a short, human-readable code.

This code unlocks context-aware onboarding paths for:
- Dispatchers connecting drivers
- Brokers assigning new loads
- Shippers verifying delivery agents
- ELDA resuming interrupted sessions

---

## Code Types

```yaml
types:
  - dispatcher_invite
  - broker_auth
  - fleet_join
  - onboarding_resume
  - tool_unlock
````

Each code is tied to an OpenHWY log entry and (if enabled) to a MARK-based task route.

---

## Where the Flow Appears

* ELDA’s “I Have a Code” prompt
* Onboarding role flows for:

  * Drivers
  * Dispatchers
  * Shippers
  * Receivers
* PacketPilot or CargoConnect referral/activation
* Developer API access (tool testing or repo access)

---

## Flow Steps

### Step 1 — Enter Code

```plaintext
[ Enter Code ]  
or  
[ Scan QR ]
```

### Step 2 — Validate Code

ELDA checks:

* Is the code valid?
* Does the role match the user flow?
* Is the expiration still valid?

### Step 3 — Autoload Context

```yaml
dispatcher:
  id: fed-321
  name: Fast & Easy Dispatching
  status: open
  invites_remaining: 5
  linked_to: packetpilot, cargoconnect
```

ELDA confirms who you are connecting to, and what permissions you’ll gain.

---

## Smart Routing

* MARK handles the command when a code is entered
* If dispatcher code:
  → Assigns driver and opens packet training
* If broker code:
  → Opens load detail page with signature panel
* If fleet join:
  → Auto-populates safety training timeline

---

## Privacy & Limits

* Codes expire by default in 7 days unless marked `persistent`
* All access is logged in OpenHWY under `.logs/consent/`
* No data is stored or matched unless code is accepted

---

## Developer Note

Each code can optionally carry a payload:

```json
{
  "role": "driver",
  "auto_tag": "fleet:easytrucking",
  "trigger": "open_packet_training",
  "expires": "2025-06-01T00:00:00Z"
}
```

---

## File Location
.project/docs/ELDA/onboarding/connection-code-flow.md