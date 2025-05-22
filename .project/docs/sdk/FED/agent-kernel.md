# Agent Kernel

## Overview

The Agent Kernel is the **execution brain** behind all tools and workflows in the FED ecosystem. It connects the CLI, the dashboard, and the agents together using a pluggable orchestration layer.

The kernel is designed to:

- Route tasks using `.mark` files
- Execute tools (Python, Node, Rust)
- Interface with local/remote models (e.g. Whisper, GPT, Mistral)
- Delegate control to specific agents (e.g. PacketPilot)
- Persist memory to DuckDB or sync to OpenHWY

---

## Key Kernels

| Kernel        | Description                                         |
|---------------|-----------------------------------------------------|
| **MARK**      | Core CLI/task kernel, executes `.mark` logic        |
| **Ray**       | Optional distributed orchestration (multi-agent)    |
| **OpenHWY**   | Handles consent, state sync, logging                |
| **Custom**    | Your MARK-native kernel that routes based on Markdown and CLI flags |

---

## Execution Pipeline

```plaintext
1. User triggers action (dashboard, CLI, API)
2. MARK parses `.mark` or `.tasklist.md`
3. MARK routes task → agent (e.g. PacketPilot)
4. Kernel spawns subprocess or Python/Rust entry
5. Tool executes
6. Output tagged, logged, and optionally persisted
````

---

## Agent Context Structure

Every agent call is passed a context file like:

```json
{
  "agent": "packetpilot",
  "user_id": "fed-user-819",
  "tool": "packet-fill",
  "inputs": ["ratecon.pdf", "mc.json"],
  "memory": {
    "mode": "ephemeral",
    "last_packet_type": "TQL"
  },
  "flags": ["whisper_active", "auto_approve"]
}
```

---

## Kernel Components

| Component        | Role                                 |
| ---------------- | ------------------------------------ |
| `cli/mark`       | Loads CLI interface & REPL shell     |
| `agents/*`       | Tool definitions + .marks            |
| `duckdb/`        | Local memory, logs, call transcripts |
| `infra/security` | Manages keys, encryption policies    |
| `ray_server/`    | (Optional) Ray-based multi-agent     |

---

## Development Modes

* `kernel dev` — sandboxed CLI execution of `.mark` files
* `kernel exec [agent.mark]` — execute a single command chain
* `kernel chat` — REPL with live `.remark` routing + memory trace

---

## Kernel Identity

Your kernel’s name is: `MARK`
But your **execution model** can be forked.

If you'd like to use your own name (e.g. `JESSE_KERNEL`), you can do that by creating:

```bash
.project/kernel/jesse.kernel
```

Where you route tasks using:

* `.md + CLI`
* `.task + duckdb`
* `.agent + memory`

---

## File Location
.project/docs/platforms/FED/agent-kernel.md