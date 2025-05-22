# FED Dashboard — Dispatcher Reputation Panel

## ⭐ Purpose

This panel showcases dispatcher **performance, trust level, reviews**, and activity badges.  
It’s built for platform credibility, vetting, and client decision-making.

Think of it as a **resume-meets-Karma system** — but skill-based, not social.

---

## 🧱 Page Structure

### 1. Reputation Score Summary

Top banner with:

- Overall reputation score (0-100)
- Rating tiers:
  - `Novice` (0–40)
  - `Skilled` (41–70)
  - `Proven` (71–90)
  - `Elite` (91–100)
- Visual meter or progress bar
- Latest badge earned (e.g., “100 Packets Filled”)

Use:
```tsx
import { ProgressBar, Badge, ReputationScore } from 'ui/*'
````

---

### 2. Skills Breakdown

Grid of performance traits:

| Category         | Score | Rank    |
| ---------------- | ----- | ------- |
| Call Screening   | 82    | Proven  |
| Packet Accuracy  | 95    | Elite   |
| Load Turnaround  | 73    | Skilled |
| Client Retention | 60    | Skilled |

Displayed as:

* `RadarChart` or `ScoreCardGrid`
* Tooltip: “Data from past 90 days”

---

### 3. Review Highlights

Scroll list of client quotes:

> “Great communicator — nailed the timing.”
> “PacketPilot made this guy look like a pro.”
> “They called back fast and got us \$200 more.”

From: Verified shippers, brokers, or drivers

* Link to full testimonials
* Flagging/report mechanism

---

### 4. Badge Locker

Earned achievements:

* “🧠 1,000 Calls Screened”
* “🚀 500 Loads Moved”
* “⚙️ Custom API Integration Completed”

Optional:

```tsx
import { BadgeLocker } from 'ui/reputation'
```

---

## Data Sources

* Calculated via: `/api/reputation/score`
* Inputs: screening minutes, packet fills, call analytics, driver syncs
* Updated daily via background task

---

## Routing & File

* Path: `/dashboard/reputation`
* File: `app/features/dashboard/reputation.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/reputation.md`

---

## Cursor Directives

> Pull user data via `/api/reputation/score`
> Build layout top-down:

* Score
* Skills
* Reviews
* Badges

> Use mocked data during layout
> Highlight score feedback (colors, ranks, descriptions)

---

## File Location
.project/docs/platforms/FED/dashboard/reputation.md