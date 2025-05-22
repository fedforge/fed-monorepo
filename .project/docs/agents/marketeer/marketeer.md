# Marketeer

## Overview

**Marketeer** is your agent + tool installation, publishing, and execution registry system.

It handles:
- Installing new agents (from your repo or external sources)
- Publishing your own tools or agents
- Resolving dependencies and injecting `.mark` + `.marker` logic
- Scanning your directory for `agent.mark` or `tool.marker` files
- Registering tools into the MARK kernel or dashboard dynamically

Think of it like `npm` or `pip`, but for AI agents and tools.

---

## Use Cases

| Command                     | Result                                              |
|-----------------------------|-----------------------------------------------------|
| `marketeer install packetpilot` | Adds PacketPilot to your `.agents/` folder        |
| `marketeer scan`               | Scans `agents/` and `tools/` for new logic         |
| `marketeer publish --agent ./packetpilot` | Packages agent for OpenHWY use         |
| `marketeer tools list`        | Shows all available tools from registry            |
| `marketeer sync`              | Syncs registry to OpenHWY + updates metadata       |

---

## Agent Format Recognition

Marketeer recognizes any directory that includes:

```bash
agent.mark
tool.marker
tool.md
````

And will automatically:

* Inject into the MARK execution table
* Add it to `dashboard-tools.yaml`
* Include it in dev sandbox for testing

---

## File Layout Example

```
.marketeer/
  ├── registry.yaml
  ├── cache/
  ├── scripts/
  │   └── install.sh
  └── packages/
      ├── packetpilot/
      │   ├── agent.mark
      │   ├── tool.marker
      │   ├── tool.md
      │   └── logic/
      └── elda/
          └── ...
```

---

## Registry Format

```yaml
registry:
  - id: packetpilot
    type: agent
    label: Packet Automation
    entry: agent.mark
    status: installed
  - id: whisper-alerts
    type: tool
    label: Call Flagging
    entry: whisper-alerts.marker
    status: installed
```

---

## Command Cheat Sheet

```bash
marketeer install elda
marketeer uninstall cargoconnect
marketeer publish --agent ./agents/packetpilot
marketeer scan --apply
marketeer update
```

---

## Integration with MARK

All installations update the MARK CLI autoloader at:

```
.project/cli/MARK/mark-project.md
```

And automatically mount available `.mark` files in `/agents/` or `/tools/`.

---

## File Location
.project/docs/agents/marketeer.md