# ELDA Fleet Owner Onboarding Flow

## Overview

This flow is designed for fleet owners to join the FED ecosystem. It guides fleet owners through registering their fleet details, connecting with carrier profiles, and setting up safety and operational preferences—all while offering access to PacketPilot, CargoConnect, and ELDA training modules.

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

Selected: **Fleet Owner**

---

## Step 2 — Fleet Registration & Options

**Fleet Owner Options:**

```plaintext
ELDA: Welcome Fleet Owner!
- Register New Fleet
- Manage Carrier Profiles
- Setup Fleet Safety & Compliance Training
- View Dispatch Performance Dashboard
- [Enter Connection Code] (if invited)
```

### Action Breakdown:

* **Register New Fleet:**

  * Input fleet name, number of trucks, driver count, and contact details.
* **Manage Carrier Profiles:**

  * Link existing carrier profiles or add new ones.
* **Setup Safety & Compliance:**

  * Launch ELDA's training modules tailored for fleet safety.
* **View Dashboard:**

  * Access performance metrics and historical dispatch data via OpenHWY.
* **Connection Code:**

  * For fleet owners with a pre-existing invite or custom integration setup.

---

## Smart Behavior & Routing

* The flow is managed by ELDA’s onboarding engine with guidance from MARK.
* Fleet registration data is stored securely (locally in DuckDB or synced via OpenHWY) based on user consent.
* If the Connection Code is entered, the system auto-validates it against the fleet invite registry.
* Data inputs automatically trigger tailored training and safety checks before full tool access is granted.

---

## Backend & Integration

* Registration details flow into your central fleet database.
* Integrated with PacketPilot and CargoConnect for seamless carrier onboarding.
* Subsequent training and compliance modules trigger via ELDA’s internal `.mark` workflows.

---

## File Location
.project/docs/ELDA/onboarding/fleet-owner.md