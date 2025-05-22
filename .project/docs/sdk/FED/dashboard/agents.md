# FED Dashboard — Agents Panel

## 🧠 Purpose

This page shows all active and available AI agents on the account.

Dispatchers can:
- View which agents are enabled
- See status (idle, active, error)
- Open the agent’s module (embedded or new screen)
- Add/remove agent permissions (based on plan tier)

---

## 🎛️ Layout Structure

Use a grid layout with `AgentCard` components (one per agent).

Each card contains:

- Agent icon + name (e.g. "PacketPilot")
- Description or mission role
- Current status (`idle`, `syncing`, `listening`, `error`)
- “Open” button → routes to agent tool
- Tooltip or info modal for advanced features
- Plan lock icon (if not available at current tier)

---

## 🧱 UI Component Imports

```tsx
import { AgentCard, Grid, Button, Tooltip, Badge } from 'ui/*'
````

Plan-locked agents should render with:

```tsx
<Badge variant="outline" className="text-yellow-500 border-yellow-500">
  Upgrade to unlock
</Badge>
```

---

## 🧭 Behavior

* Load agent list from:
  `GET /api/dashboard/agents`
* Allow dynamic enable/disable via user role
* Clicking “Open” routes to `/tools/[agent-id]`

---

## Example AgentCard Data

```json
{
  "id": "packetpilot",
  "name": "PacketPilot",
  "status": "idle",
  "description": "Auto-fill carrier packets using MC#, ratecon, and more.",
  "available": true
}
```

---

## Suggested Grid Layout

| Agent        | Status     | Action     | Plan Lock |
| ------------ | ---------- | ---------- | --------- |
| PacketPilot  | 🟢 Idle    | \[Open]    | No        |
| CargoConnect | 🟠 Syncing | \[Open]    | No        |
| ELDA         | 🔵 Active  | \[Open]    | No        |
| Marketeer    | 🔒 Locked  | \[Upgrade] | Yes       |

---

## Routing & File

* Path: `/dashboard/agents`
* File: `app/features/dashboard/agents.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/agents.md`

---

## Cursor Directives

> When Cursor starts this file:

* Import from `packages/ui/agentcard`
* Pull status using `/api/dashboard/agents`
* Respect plan tier for visibility
* Use consistent styling for locked agents

---

## File Location
.project/docs/platforms/FED/dashboard/agents.md