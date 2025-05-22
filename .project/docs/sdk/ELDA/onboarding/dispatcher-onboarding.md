# ELDA Dispatcher Onboarding Flow

## Overview

This flow is for dispatchers joining the ecosystem. It’s built for flexibility, allowing them to:

- Learn dispatching via ELDA
- Connect with carriers or fleets
- Automate paperwork with PacketPilot
- Sync with CargoConnect
- Begin safety training
- Enter or receive a Connection Code

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

Selected: `Dispatcher`

---

## Step 2 — Dispatcher Options

```txt
ELDA: I’m looking for...
- Carriers
- Load Connections
- Dispatch Course
- Safety Training
- [Connection Code] (Enter Code)
```

### Action Breakdown:

* **Carriers**: OpenHWY-based driver/fleet search
* **Load Connections**: Triggers CargoConnect onboarding
* **Dispatch Course**: Launch ELDA's learning flow
* **Safety Training**: Access safety + compliance training via ELDA
* **Connection Code**: Manual entry or request tool

---

## Logic & Routing

* Each option launches a flow under `.mark/dispatcher-path.mark`
* Onboarding metadata stored in DuckDB (or synced if online)
* Dispatcher’s rating and progress tracked in OpenHWY
* Can auto-assign training modules and limit access to tools until certified

---

## Smart Behavior

* ELDA can recommend PacketPilot if dispatcher opts for Load Connections
* If Connection Code entered, ELDA auto-validates against invite system
* Flow can be resumed later — stored in local encrypted memory or cloud

---

## File Location
.project/docs/ELDA/onboarding/dispatcher-onboarding.md