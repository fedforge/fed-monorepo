# FED Dashboard — Settings Panel

## ⚙️ Purpose

This is the advanced control center for power users, devs, and fleet admins.  
Use it to enable experimental tools, link developer APIs, or toggle system-wide behavior for your instance.

---

## 🧱 Panel Sections

### 1. Experimental Features

Toggle switches for beta features:
- ✨ Whisper Edge Mode (local transcription)
- 🔎 Smart Rate Memory Graph
- 🧠 Auto-Recall Packets from Similar Brokers
- 🧪 AI Dispute Reasoning Engine

Each toggle has:
```tsx
import { Switch, Tooltip, BetaTag } from 'ui/*'
````

> Some features may be locked behind Boss plan or developer access.

---

### 2. Developer Sandbox

Enable:

* Agent override logs
* Request headers view
* API mock injection
* Console inspection tools (on dev builds only)

```tsx
import { DevPanel, JsonToggle } from 'ui/dev'
```

Optional:

* Enable `.continue` scaffolding mode
* Enable `.cursor` sandbox preview

---

### 3. Data + Environment Settings

* Toggle:

  * Use cloud for Whisper / GPT vs local
  * Default packet save path (local, OpenHWY, cloud)
  * Auto-wipe logs after X days

* Connected APIs:

  * Twilio
  * Whisper
  * GPT API key manager

---

## API Endpoints

* `GET /api/settings`
* `POST /api/settings/update`

Stored per user or fleet. Some settings persist in local DuckDB or secured cache.

---

### Example JSON

```json
{
  "beta": {
    "whisperEdge": true,
    "autoRecall": false
  },
  "env": {
    "saveLocation": "cloud",
    "logTTL": 90
  },
  "dev": {
    "sandbox": true,
    "headersVisible": false
  }
}
```

---

## Routing & File

* Path: `/dashboard/settings`
* File: `app/features/dashboard/settings.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/settings.md`

---

## Cursor Directives

> Build collapsible section blocks for each category
> Use `Switch`, `Textarea`, and custom `DevPanel` components
> Write to local mock store if API keys are missing
> Gate some toggles with `planTier !== 'boss'`

---

## File Location
.project/docs/platforms/FED/dashboard/settings.md