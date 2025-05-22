# Memory Policies

## Overview

The FED ecosystem uses a layered memory system to track, recall, and structure AI interaction — safely and transparently.

Memory can be:
- 🔁 **Ephemeral** (session-based, no persistence)
- 💾 **Persistent** (stored in DuckDB or OpenHWY)
- 🔒 **Isolated** (tool-only memory)
- 🔗 **Shared** (cross-tool context, opt-in)
- 🧠 **Visible** (available to AI agents) or 🔕 **Hidden** (used only for logs)

This doc defines how memory works across:
- Tools
- Agents
- Sessions
- User roles
- Legal compliance

---

## Default Memory Mode

```yaml
default:
  mode: ephemeral
  visibility: agent-only
  retention: 90d
  consent_required: true
````

---

## Memory Modes

| Mode         | Description                                               |
| ------------ | --------------------------------------------------------- |
| `ephemeral`  | Stored in memory cache, auto-clears on logout/session end |
| `persistent` | Logged in DuckDB + optionally synced to OpenHWY           |
| `shared`     | Tool memory accessible across multiple agents             |
| `isolated`   | Only the invoking tool can access it                      |

---

## Visibility Levels

| Level          | Description                                     |
| -------------- | ----------------------------------------------- |
| `agent-only`   | Agent can recall memory context during session  |
| `system-only`  | Used for logging, not shown to agent at runtime |
| `user-visible` | Memory can be displayed/editable in UI          |

---

## Example Memory Chain

```yaml
session_id: 881-fed-session
agent: packetpilot
tool: fill-packet
memory:
  mc_number: 123456
  company_name: Eagle Logistics
  last_ratecon: tql
visibility: agent-only
mode: ephemeral
```

If persistent memory is enabled:

* It is stored in DuckDB under `session_memory`
* Retention can be set per user or plan

---

## Consent & Retention Rules

* FED **never saves memory permanently** unless:

  * User has a paid plan **and**
  * They’ve enabled persistent memory in settings **and**
  * The agent they are using has `consent_required: true`

* Retention Settings:

```yaml
retention_policy:
  default: 90d
  min: 7d
  max: 3y (Boss tier)
  archive_after: 30d
  purge_if: unpaid + expired
```

---

## Legal Compliance Notes

* Memory is stored **locally** first (DuckDB)
* OpenHWY syncs only if consent + paid storage enabled
* User can always export their memory/logs as `.json`

---

## Developer Hooks

You can access memory context in:

* `.mark` using `@context` block
* Python tools via `get_memory_context()`
* CLI with `mark --inspect-memory`

---

## File Location
.project/docs/platforms/FED/memory-policies.md