# MARK Routing Engine

## Overview

MARK (Markdown Agent Routing Kernel) is the CLI + kernel system that powers task flow execution across the FED ecosystem. It interprets `.mark` files and routes data, logic, and control to the right agent or process.

Think of MARK as the **orchestrator brain** between CLI, UI, API, and AI agent logic.

---

## What MARK Executes

- `*.mark` files in `agents/`, `cli/`, or `platforms/`
- Inline task maps (in `.tasklist.md`)
- Markdown code blocks with `@agent`, `@tool`, `@input`, `@output`
- Tool definitions and workflows from `tool.md` and `tool.marks`

---

## File Format Example

```markdown
# packetpilot.mark

@agent packetpilot
@input rate_confirmation.pdf
@input mc_certificate.pdf
@output packet_filled.json

Run PacketPilot with the above docs.
````

MARK parses this and triggers:

1. PacketPilot agent
2. Input bindings (files or strings)
3. Output expectations

---

## Routing Rules

* `@agent` must match a registered agent
* `@input`/`@output` types are declared but validated at runtime
* Markdown blocks must be parsable with no ambiguous tags
* `.remark` is used for REPL/chat mode
* `.mark` is used for task invocation

---

## Execution Contexts

MARK supports 4 modes:

| Mode       | Purpose                         |
| ---------- | ------------------------------- |
| `--exec`   | Run a `.mark` task file now     |
| `--remark` | Open REPL with a `.mark` preset |
| `--setup`  | Register agent or environment   |
| `--chat`   | Engage an agent in live context |

---

## Live Routing Stack

MARK uses this hierarchy when resolving a command:

```plaintext

``` with args or flag binding
5. Route memory/logs to OpenHWY or DuckDB
```

---

## Logging

MARK logs every run under:

```
.logs/mark/[agent]/YYYY-MM-DD/*.run.md
```

Log contains:

* Command
* Inputs
* Tool path
* Output
* Errors (if any)

---

## File Location
.project/docs/cli/MARK/mark-routing.md