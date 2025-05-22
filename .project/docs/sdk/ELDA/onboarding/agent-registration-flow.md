# Agent Registration Flow

## Overview

This flow outlines how new **AI agents**, assistants, or service nodes (like PacketPilot, ELDA, or CargoConnect) are formally registered into the FED system.

An agent must be registered before it can:
- Appear in the UI or dashboard
- Be used in a `.mark` task sequence
- Access user logs or calls
- Respond to any user

---

## Why Agent Registration Matters

Registering agents allows:
- ✅ Permission enforcement
- ✅ Memory tagging + DuckDB schema mapping
- ✅ Proper consent routing
- ✅ Accountability + log isolation
- ✅ Cross-tool orchestration (via MARK)

---

## Required Metadata (Per Agent)

```yaml
agent:
  id: packetpilot
  name: PacketPilot
  icon: FileText
  type: system
  description: Autofills broker packets and form data using AI.
  capabilities:
    - pdf_parsing
    - json_filling
    - email_autosend
  entry_point: /api/packetpilot/start
  version: 1.2.0
  scope: dispatcher-only
  memory: ephemeral | persistent
  consent_required: true
  rate_limit: 5/min
````

---

## Flow Steps

1. **Define Metadata**

   * Name, scope, capabilities, icon, memory type, consent flags

2. **Submit Agent Registration**

   * Inserted into OpenHWY registry
   * Stored in `.project/agents/tools/<agent_id>/tool.md`

3. **MARK Validation**

   * MARK runs `.validate.mark` to test API routes and memory injection

4. **Approval (Optional)**

   * ELDA can approve, sandbox, or restrict agent from going live

---

## Smart Behavior

* If an agent lacks `consent_required: true`, it cannot access driver/broker records
* Agent logs are stored under:

  ```
  .logs/agents/{agent_id}/
  ```
* Agent tools are autoloaded into developer sandbox if marked `type: local`

---

## Example Registry Entry

```yaml
packetpilot:
  type: system
  icon: FileText
  default_scope: dispatcher
  description: Fills packets via AI parsing
  prompt_template: /prompts/packetpilot.mark
```

---

## File Location
.project/docs/ELDA/onboarding/agent-registration-flow.md