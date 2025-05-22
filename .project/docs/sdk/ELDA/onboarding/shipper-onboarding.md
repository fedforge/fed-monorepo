# ELDA Shipper / Broker / Receiver Onboarding Flow

## Overview

This onboarding path is built for **shippers**, **receivers**, and **freight brokers** entering the ecosystem. These users often need to be matched to dispatchers, carriers, or load management tools.

The flow is designed for:
- Fast identity recognition
- Simple connection code input
- Option to request a dispatcher or carrier match

---

## Splash Screen

```plaintext
[ELDA Logo]
Effortless Logistics Driver Assistant
[ Get Started ]
"Powered by OpenHWY"
````

---

## Step 1 — Role Selection

```plaintext
I’m a…
- Driver
- Dispatcher
- Fleet Owner
- Someone Else
```

Selected: **Someone Else**

---

## Step 2 — Identity Clarification

```plaintext
I’m a…
- Shipper
- Receiver
- Broker
```

---

## Step 3 — Connection Page

```plaintext
Please enter your Connection Code  
[ Enter Code ]  
[ Request New Code ]  
```

### Behavior:

* **Enter Code**:

  * Validates connection and auto-assigns to dispatcher or fleet profile.
* **Request New Code**:

  * Sends notification to ELDA to initiate onboarding process with a dispatcher match.

---

## Smart Behavior & Routing

* If the connection code is valid, ELDA links them to the dispatcher account and enables visibility into load flow.
* If no dispatcher is available, ELDA initiates a callback or AI broker intro sequence via PacketPilot.
* Logs are stored securely and limited to intent + response only (no sensitive client data saved by default unless enabled).

---

## Notes on Privacy & Compliance

* No documents are stored unless the user explicitly uploads or requests automation.
* OpenHWY provides audit logs and consent-tracking.

---

## File Location
.project/docs/ELDA/onboarding/shipper-onboarding.md