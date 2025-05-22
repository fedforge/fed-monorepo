# FED Dashboard — Home Screen

## 🧭 Overview

This is the **main landing screen** for dispatchers after login. It displays real-time status, summaries of active agents, and load/call activity. It acts as the command center for PacketPilot, CargoConnect, and ELDA.

The home screen should **feel fast, calm, and responsive**. Dispatchers land here to get clarity and direction.

---

## 🧱 Layout Structure

Use the following atomic layout blocks from `packages/ui/`:

- `SidebarNav`: Vertical agent switcher (PacketPilot, CargoConnect, ELDA, etc.)
- `Topbar`: Branding + user profile + theme toggle
- `StatusCard`: Summaries of calls, loads, and sessions
- `LiveFeed`: Vertical activity stream (calls, packet signs, load finds)
- `ActionButtons`: Quick launch: “Call Broker”, “Find Load”, “Fill Packet”
- `AgentWidget`: Embedded mini UI for an active agent session

---

## 📊 Sections

### 1. Welcome Banner

- Show agent bubble + dispatcher name  
- e.g., “👋 Welcome back, Jesse. PacketPilot is standing by.”

### 2. Quick Status

- Calls today
- Packets signed
- Loads pulled
- Flagged events (negotiation alerts, delay warnings)

Use `StatusCard` with `icon`, `value`, and `label`

---

### 3. Live Activity Feed

Recent actions from agents:

- “📞 Call with CH Robinson started”
- “📎 Ratecon parsed from TQL”
- “🧠 Packet auto-filled by PacketPilot”

`LiveFeed` should auto-refresh and pull from `/api/dashboard/logs`

---

### 4. Quick Actions

3 large buttons:

- 📞 `Call Broker`
- 🧾 `Fill Packet`
- 🚛 `Find Load`

Use `ActionButtons` with animation ripple or glow

---

### 5. Agent Control Widgets

Show a small `AgentWidget` for whichever agent is currently active:

- PacketPilot — current packet progress
- CargoConnect — syncing status
- ELDA — chat or driver question

Default state if no agent:  
> “No active sessions. Use Quick Actions to begin.”

---

## ⚙️ Behavior

- All sections animate in (top-down)
- Syncs every 10s via WebSocket or polling
- Light/dark mode ready
- Mobile-first adaptive layout using `Stack` + `ScrollArea`

---

## Component Imports

- From `packages/ui/`:
  - `statuscard`, `livefeed`, `button`, `stack`, `agentwidget`, `topbar`, `sidebarnav`
- From `packages/app/types`:
  - `Dispatcher`, `Load`, `CallLog`

---

## Routing & File

- Path: `/dashboard/home`
- File: `app/features/dashboard/home.tsx`
- Docs: `.project/docs/platforms/FED/dashboard/home.md`

---

## Cursor Directives

> When using Cursor, scaffold the layout using components from `packages/ui`.  
> Only import what’s defined. Layout first. Add logic second.  
> Focus on clarity, spacing, and user feedback elements.


---

## File Location
.project/docs/platforms/FED/dashboard/home.md