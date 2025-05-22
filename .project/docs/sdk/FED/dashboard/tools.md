# FED Dashboard — Tools Management Panel

## 🧰 Purpose

This panel allows users to control which tools are:
- Enabled
- Shown on the dashboard
- Customized per dispatcher or per fleet

Supports hiding, renaming, and branding tools like:
- PacketPilot
- CargoConnect
- ELDA
- Load Timeline
- Reputation
- Documents
- Call Logs

---

## 🧱 Layout Overview

### 1. Tools List Grid

Each card shows:

- Tool name
- Status toggle (on/off)
- Visibility scope (dispatcher / fleet / all)
- Plan lock (if gated)
- "Settings" button for additional options

Use:
```tsx
import { ToolCard, Switch, Badge, Button } from 'ui/*'
````

---

### 2. Branding & Customization Modal

If the user has permissions (fleet admin or above):

* Override tool name (e.g., "Driver Pulse" instead of "ELDA")
* Choose icon or upload custom logo
* Set visibility (who can see it)

---

### 3. Save/Reset State

Changes auto-save with debounce and persist via API:

```http
POST /api/tools/update
```

Tool config stored per user or fleet in DuckDB or secure user cache.

---

## Example Tool Config JSON

```json
{
  "toolId": "packetpilot",
  "enabled": true,
  "visibleTo": "dispatcher",
  "customName": "Rapid PacketFill",
  "planTier": "starter"
}
```

---

### Plan Tier Locking

If tool is locked:

```tsx
<Badge variant="outline" className="text-yellow-500 border-yellow-500">
  Upgrade to unlock
</Badge>
```

---

## Routing & File

* Path: `/dashboard/tools`
* File: `app/features/dashboard/tools.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/tools.md`

---

## Cursor Directives

> Use `ToolCard` for rendering list
> `POST` updates to `/api/tools/update`
> Use dropdown for visibility and input for name override
> Load initial config via `/api/tools/list`

---

## File Location
.project/docs/platforms/FED/dashboard/tools.md