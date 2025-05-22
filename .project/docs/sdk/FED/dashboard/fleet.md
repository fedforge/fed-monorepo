# FED Dashboard — Fleet Management Panel

## 🚛 Purpose

This screen lets dispatchers **see all drivers, their current status, location**, and interact via ELDA for chat, training, or safety notifications.

It’s the bridge between dispatcher and fleet — human or AI-assisted.

---

## 🧱 Page Layout

### 1. Driver Overview Grid

Each driver appears as a `DriverCard`:

- Name / handle
- Status (driving, idle, offline)
- Location (city/state)
- Assigned Load (with link)
- ELDA chat icon
- Signal strength / check-in indicator

Use:
```tsx
import { DriverCard, Grid, StatusBadge, ChatButton } from 'ui/*'
````

---

### 2. Driver Status Map

Clickable map of current driver locations, using:

```tsx
import { DriverMap } from 'ui/drivermap'
```

Optional:

* Toggle between driver pins or heatmap (for large fleets)
* Show ETA lines if assigned load exists

---

### 3. Chat With Driver (ELDA)

Sidebar or modal for chat UI:

* Message input
* Previous ELDA prompts (training, inspection, alert)
* Read receipts or "viewed"
* Auto-generated safety tips or load info

UI component:

```tsx
import { AIAssistantChat } from 'ui/aichat'
```

---

### 4. Driver Controls

For each card or list item:

* ✏️ Edit driver info (onClick modal)
* 📍 Ping for location
* 📤 Send alert
* 📄 View past load history

---

## Example Driver JSON

```json
{
  "id": "driver-231",
  "name": "James O.",
  "status": "Driving",
  "location": "Little Rock, AR",
  "loadId": "load-8851",
  "chatEnabled": true
}
```

---

## Routing & File

* Path: `/dashboard/fleet`
* File: `app/features/dashboard/fleet.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/fleet.md`

---

## Cursor Directives

> Scaffold with a split layout: driver grid left, map right.
> ELDA chat only opens on `chatEnabled === true`
> If screen is narrow, stack map under cards.

---

## File Location
.project/docs/platforms/FED/dashboard/fleet.md