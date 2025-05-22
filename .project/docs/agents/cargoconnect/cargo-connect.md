# Agent Profile: CargoConnect

## Overview

**CargoConnect** is a system-level AI agent responsible for connecting users to their freight platforms (e.g., broker portals, load boards, shipper dashboards) using either:

- Direct API integrations (when available), or
- Secure, user-authorized browser automation

CargoConnect operates on-demand, never maintains persistent sessions, and always respects user-defined schedules, consent, and connection preferences.

---

## Core Functions

1. **API-Based Integration (Preferred)**
   - Connects to broker or shipper portals using official APIs
   - Requires user credentials and login verification
   - Data is pulled securely, structured, and routed into user dashboards

2. **Manual Connection (Fallback)**
   - Launches a secure iframe or modal pop-up to allow the user to log in to their freight portal
   - CargoConnect performs a **one-time action**:
     - Takes a screenshot or screen recording
     - OCRs the load and rate data
     - Structures it into dashboard-ready format
   - No persistent sessions, no background scraping

---

## Legal Compliance

CargoConnect:
- **Does not act as a load board**
- **Does not store or resell rate data**
- **Does not negotiate with brokers**
- Operates exclusively on **user-initiated commands**
- Can only log in using **credentials provided and authorized by the user**
- Screenshots and extracted data are used only in the user's current session or stored based on their plan/storage preferences

This ensures compliance with:
- FMCSA broker/dispatcher role boundaries
- Platform Terms of Service (via user-authorized access)
- Data privacy laws (no third-party use or sharing)

---

## Optional Features

- **Credential storage** (locally or encrypted via user settings)
- **Scheduled connection polling**
  - User defines times CargoConnect is allowed to log in and refresh data
- **Cloud-based mode** for faster connections using secure server-side automation (opt-in)

---

## Example Flow

1. User logs into FED and opens CargoConnect
2. Selects "Add Broker Portal"
3. Provides:
   - URL
   - Username + password (optional for autofill)
4. CargoConnect:
   - Confirms the portal is reachable
   - Opens a secure modal
   - Logs in and extracts active load data
5. User sees their data rendered in the FED dashboard
6. CargoConnect disconnects immediately

---

## Agent Relationships

- **Works under FED** as a system-level dispatcher connector
- **Supports PacketPilot** by routing packets once load data is received
- **Logs all activity with OpenHighway** for audit trail and security
- **Enforces ELDA safety flags** if data sources appear malicious or outdated

---

## Limitations

- Cannot negotiate with brokers directly
- Does not operate as a persistent scraper
- Cannot collect or display data from sources without user consent

---

## Status

- [x] Browser-based login + screen capture
- [x] OCR and render pipeline
- [x] Secure session handling
- [ ] Encrypted credential locker (in development)
- [ ] Multi-platform load parsing (pending broker format standardization)

---

Last updated: `2025-05-18`

