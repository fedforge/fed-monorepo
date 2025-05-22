# FED Dashboard Build Guide

This README is for local AI agents (like `.cursor` or `.continue`) to understand and scaffold the **FED dashboard interface**, starting from this folder.

It describes the visual goals, logic connections, file structure, and build constraints for the front end of the dispatching platform — FED.

---

## 🧠 Primary Objective

Build the full dispatcher dashboard for **FED**, using my UI component system under:

```

FED/packages/ui/

```

All UI logic is componentized (web + native) and must be imported from `ui/*`.

This dashboard is used by:
- Dispatchers using PacketPilot and CargoConnect
- Admins monitoring call logs, screening, and contracts
- Owners and VAs customizing their tool visibility

---

## 🖼️ Visual Style & Theme

FED uses a **modular agent layout** with bubble-style agent switchers (on the left) and a modern dark/light toggle UI.

**Inspired by:**
- ShadCN components
- Notion’s clean grid
- Stripe’s dashboard transitions
- GrapesJS landing experience

**Top Rules:**
- Dashboard is powered by `MARK`
- Components come from `packages/ui/*`
- Theme is dispatcher-centered, mobile-adaptive
- Minimal boilerplate. Max reusability.

---

## 🗂️ Build from This Tree

You are in:

```

.project/docs/platforms/FED/dashboard/

```

Your role:
- Read this file to initialize build state
- Look for `*.md` files in this folder to guide specific pages and layout decisions
- Communicate via `.continue` for implementation details

---

## 🌐 Sections to Build

Each of the following should have its own `.md`:

- `home.md`: Default landing state after login
- `status.md`: Live dispatcher + driver load activity
- `agents.md`: View + trigger agents (like PacketPilot)
- `calls.md`: Whisper logs + transcriptions
- `loads.md`: Connected loadboards + CargoConnect
- `fleet.md`: Driver/chat + ELDA integrations
- `reputation.md`: Dispatcher ratings
- `settings.md`: Theme, preferences, billing, privacy
- `tools.md`: Direct access to unlocked tools
- `debug.md`: MARK logs + memory output
- `mobile.md`: PWA/mobile shell layout logic

---

## ⚡ Quick Build Philosophy

This is a **PWA-compatible**, real-time-capable, modular dashboard.

You are **not** building from scratch — use the following:
- Shared UI from `packages/ui/`
- Layouts from `packages/app/`
- Screen logic from `.project/docs/`
- Behavior from `platforms/FED/features/*`

This dashboard should be **fast**, **reactive**, **atomic**, and **agent-native**.

---

## ✅ Setup Instruction for Cursor

If you’re Cursor:
- Load this README when entering this folder
- Scaffold `home.md` first
- Use file-by-file logic from here down
- Ask if unsure about agents, tools, or component imports
- Never generate placeholder boilerplate
- Defer to `ui/*` components and `types/*.ts`

---

## ✍️ Authored By

Jesse, Founder of FED Dispatching & OpenHWY.  
This doc reflects the internal logic and visual brain of the dashboard.

---

## File Location
.project/docs/platforms/FED/dashboard/README.md