# Developer Integrations

## Overview

This guide explains how to integrate external tools, APIs, dashboards, or AI agents into the FED ecosystem. It ensures everything remains secure, scoped, and compliant with the OpenHWY model.

If you're building for:
- Custom TMS extensions
- Carrier/broker tool add-ons
- Mobile clients or white-label UIs
- Your own AI agent tools

This is where you start.

---

## 🧩 Integration Pathways

| Integration Type | Entry Point                                   | Notes                              |
|------------------|-----------------------------------------------|------------------------------------|
| CLI Tool         | `.marker` file in `/tools/`                   | Registered in `tools/tool.marks`  |
| Agent Extension  | `.mark` file in `/marks/`                     | Must include `agent.mark` metadata |
| Dashboard Widget | `apps/web/components/widgets/`                | Must follow atomic structure       |
| API Hook         | `apps/web/api/` or `apps/mobile/api/`         | Use REST or WebSocket conventions  |
| OpenHWY Registry | POST to `/api/openhwy/register-agent`         | For approval + propagation         |

---

## 🛠 Tool Integration Example

To create a tool:
1. Add `tools/load-parser.marker`
2. Register it in `tools/tool.marks`:
```yaml
- id: load-parser
  label: Structured Load Extractor
  path: tools/load-parser.marker
````

3. Use in any `.mark` file like this:

```markdown
@tool load-parser
@input ./pdfs/sample-ratecon.pdf
@output ./json/parsed.json
```

---

## 📦 Agent Integration Example

1. Create directory: `/agents/mycoolagent/`

2. Add:

   * `agent.mark`
   * `tool.marker`
   * Optional: `logic/`, `memory.md`, `tasklist.md`

3. Register in `mark-project.md`:

```yaml
- id: mycoolagent
  label: Smart Rate Checker
  entry: agents/mycoolagent.marker
  meta: marks/mycoolagent/agent.mark
```

---

## 📡 API Integration

Expose endpoints via:

* `FastAPI` backend under `/apps/web/api/fed`
* Must follow:

```http
POST /api/fed/tools/use
Authorization: Bearer <token>
Content-Type: application/json
```

With this structure:

```json
{
  "agent": "packetpilot",
  "tool": "fill-packet",
  "inputs": { "pdf": "..." }
}
```

---

## 📘 Developer Registration

To register your tool or agent with FED:

1. Submit via:

   ```bash
   POST /api/openhwy/register-agent
   ```
2. Required fields:

   * Agent ID
   * Label
   * Public/Private flag
   * Terms consent

---

## 🧪 Dev Sandbox (Local)

You can test integrations via:

```bash
NEXT_PUBLIC_MOCK=true pnpm dev
```

Or through MARK CLI in dry-run mode:

```bash
mark --marker tools/load-parser.marker --dry-run
```

---

## File Location
.project/docs/platforms/FED/dev-integrations.md