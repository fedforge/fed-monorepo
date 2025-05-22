# CargoConnect

## Overview

CargoConnect is FED’s load board integrator and passive data collector.

Its job is to:
- Help users **log into their existing load boards**
- **Scrape** load data when APIs aren’t available
- **Render** load board UIs in modals or iframes
- Take **screenshots**, **parse tables**, and **structure load offers**
- Feed loads into the dashboard in a unified format

---

## Key Capabilities

| Feature           | Description                                            |
|-------------------|--------------------------------------------------------|
| `iframe_auth`     | Allows users to log into DAT, Truckstop, etc.         |
| `load_scraping`   | Uses headless browser (or user-side scripting) to pull loads |
| `api_passthrough` | Uses official APIs when credentials are provided      |
| `screenshot_mode` | Captures visual + data snapshot from load board       |
| `rate_tagging`    | Highlights suspicious, duplicated, or premium offers  |
| `connection_cache`| Saves logins in encrypted local store or DuckDB       |

---

## Input Flow

User can:
- Enter load board URL
- Enter login manually
- OR use saved login (if previously granted)
- Then allow CargoConnect to:
  - Autofill login
  - Navigate to board
  - Screenshot or parse

---

## Output Format

```json
[
  {
    "origin": "Dallas, TX",
    "destination": "Atlanta, GA",
    "rate": "$1800",
    "equipment": "Dry Van",
    "miles": 880,
    "posted_at": "2025-05-19T08:15:00Z",
    "source": "Truckstop",
    "url": "https://truckstop.com/load/1092",
    "tags": ["good_rate", "long_distance"]
  }
]
````

---

## Modes

| Mode       | Triggered By        | Description                    |
| ---------- | ------------------- | ------------------------------ |
| Manual     | User types in site  | Opens iframe modal             |
| API        | Auto-login + scrape | Scheduled or on-demand         |
| Background | DuckDB sync         | Pulls on hourly/daily interval |

---

## Privacy & Consent

* No login stored unless user explicitly opts in
* All scraping occurs in **user’s context**, not server-side (unless enabled)
* No data is ever sold or shared
* Logs stored in: `.logs/cargoconnect/{user_id}/loads.json`

---

## Integration With FED

* FED calls CargoConnect when:

  * Load dashboard opened
  * Connection toggled
  * User links DAT/Truckstop or enters manual URL
* Loads injected into dispatcher dashboard
* Can trigger PacketPilot if a ratecon is detected post-accept

---

## Developer Example

```ts
const res = await fetch('/api/cargoconnect/pull', {
  method: 'POST',
  body: JSON.stringify({
    board: 'DAT',
    username: '...',
    password: '...'
  })
})
```

---

## MARK Example

```markdown
@agent cargoconnect
@input board_url
@input login_creds
@output load_table.json

Scrape the current loads and flag bad rates.
```

---

## Related Files

```
.project/agents/cargoconnect/
├── tool.md
├── tool.marks
├── logic/
│   └── scrape.js
├── prompts/
│   └── scrape-loads.mark
├── components/
│   └── LoadBoardModal.tsx
```

---

## File Location
.project/docs/agents/cargoconnect.md