# FED Dashboard — Status Screen

## 🎯 Purpose

This page is a **real-time operational command view**.  
It lets a dispatcher or fleet owner see the health of all in-flight activity:

- Driver check-ins
- Load progress and ETAs
- Call engagement stats
- AI flags and recommendations
- Incomplete packets or missing forms

This is the live window into the "now" of dispatching.

---

## 🧱 Layout Structure

Use these primary components:

- `TimelineView`: Scrollable, timestamped sequence of events
- `DriverMap`: Map showing current driver positions (mocked with geoJSON or API)
- `CallStats`: Summary of active calls + time spent
- `LoadCards`: Grid/list of active loads
- `AlertBar`: Strip showing AI notices or urgent items

---

## 📊 Sections

### 1. Top Status Summary

Show:

- 🚛 Drivers Online: `X`
- 📦 Active Loads: `Y`
- 📞 Calls Today: `Z`
- 🧠 AI Flags: `N`

Render as 4 small `StatusCard` components or one responsive row

---

### 2. Driver Map

Visual map showing:

- Driver avatars
- City tags (origin, destination)
- Live location update (mock or real GPS)
- Link to `/fleet/{driver}` for detail

Use:
```tsx
import { DriverMap } from 'ui/drivermap'
````

---

### 3. Live Timeline View

* Left column or center
* All time-sorted logs (packet signed, call flagged, load matched)
* Think “Ops Console”

Each entry has:

* Agent icon
* Short message
* Timestamp
* Optional `→` link to detail

---

### 4. Load Snapshot

Use `LoadCard` to show loads that are:

* In-transit
* Scheduled
* Awaiting packet completion

Include:

* Broker
* Driver
* Pickup/drop
* Status (On time, Late, No BOL)

---

### 5. AI Flag Alerts

`AlertBar` across top or bottom of page.

Examples:

* “⚠️ TQL call flagged: rate misaligned with goal”
* “📎 Packet 792 missing signature”

---

## 🧠 Component Imports

* `statuscard`, `drivermap`, `loadcard`, `timelineview`, `alertbar`, `stack`, `scrollarea`
* From `/types`: `Driver`, `Load`, `CallLog`, `AlertEvent`

---

## Routing & File

* Path: `/dashboard/status`
* File: `app/features/dashboard/status.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/status.md`

---

## Cursor Directives

> When Cursor loads this file:

* Build layout with stacked sections
* Place map first on wide screens, second on mobile
* Use mocked data until API is wired
* Defer auth/session hooks to shared provider

---

## File Location
.project/docs/platforms/FED/dashboard/status.md