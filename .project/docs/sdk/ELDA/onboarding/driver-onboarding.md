Got it — based on your whiteboard flow and vision for ELDA-powered onboarding, here is the # ELDA Driver Onboarding Flow

## Overview

ELDA (Effortless Logistics Driver Assistant) handles the **onboarding UI and flow** for all users entering the ecosystem — including drivers, dispatchers, fleet owners, brokers, and shippers.

This flow is optimized for:

- Instant setup
- Progressive disclosure (only what’s needed)
- Optional connection codes
- Training-first path

---

## Splash Screen

```txt
[ELDA Logo]  
Effortless Logistics Driver Assistant  
[ Get Started ]  
"Powered by OpenHWY"
````

---

## Step 1 — Role Selection

```txt
I’m a...
- Driver
- Dispatcher
- Fleet Owner
- Someone Else
```

(ELDA uses this to branch into the appropriate path.)

---

## Step 2 — Connections Page (Driver Path)

```txt
ELDA: I’m looking for...
- Carriers
- Dispatchers
- Load Connections
- Dispatch Course
- Safety Training
- [Connection Code] (Enter Code)
```

* **Each button** either triggers a learning path, account matching flow, or redirects to PacketPilot or CargoConnect.
* **Connection Code** is optional but prioritized if present.

---

## Alternate Paths

### For Brokers, Shippers, Receivers:

```txt
I’m a...
- Shipper
- Receiver
- Broker
```

Then:

```txt
Please enter Connection Code  
[Enter Code] [Request One]  
```

---

## Smart Behavior

* ELDA listens for voice or click input
* Shows most relevant next option based on user history
* Suggests PacketPilot training if user selects "Dispatch Course"
* Tracks connection metadata with OpenHWY for later usage in APIs

---

## Backend Notes

* All options are routed through `.mark` flow
* DuckDB stores consent + code logs (temporary or user-local)
* Dispatchers are tagged by ELDA with `onboarding_path: dispatcher-driver-match`

---

## File Location
.project/docs/ELDA/onboarding/driver-onboarding.md
