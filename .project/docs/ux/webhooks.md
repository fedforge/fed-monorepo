# Webhooks Guide

## Overview

FED supports secure outbound webhooks so external systems (or users) can receive real-time updates when key events occur across PacketPilot, CargoConnect, ELDA, and the dashboard.

This allows dispatchers, fleets, or connected platforms to:
- Sync data across tools
- Send alerts to Slack, SMS, or internal UIs
- Log and archive signed packets or call events

---

## 🔌 How Webhooks Work

1. User registers a webhook URL via the dashboard or API
2. Events are triggered by agent/tool activity
3. Payload is sent as a signed POST request to the target URL
4. Target must respond with `200 OK` or retry logic kicks in

---

## 🧪 Example Events

| Event ID               | Trigger Description                       |
|------------------------|--------------------------------------------|
| `load.new`             | A new load is found via CargoConnect       |
| `packet.signed`        | A packet is signed and submitted           |
| `call.started`         | A call is placed using FED                 |
| `screening.alert`      | Whisper detects flagged conversation       |
| `signature.failed`     | A signature attempt failed validation      |
| `memory.synced`        | Data synced to OpenHWY successfully        |

---

## 🔐 Security

Each webhook includes:

- `X-FED-SIGNATURE` header with HMAC-SHA256 hash
- Payload timestamp to prevent replay attacks
- Public verification keys provided during registration

---

## 📦 Sample Payload

```json
{
  "event": "packet.signed",
  "timestamp": "2025-05-19T17:05:42Z",
  "agent": "packetpilot",
  "dispatcher_id": "fed-user-190",
  "metadata": {
    "mc_number": "1234567",
    "broker": "CH Robinson",
    "pdf_url": "https://fed.ai/packets/1493.pdf"
  }
}
````

---

## 🔄 Registering a Webhook

### API

```http
POST /api/webhooks/register
Content-Type: application/json
Authorization: Bearer <your-token>
```

```json
{
  "url": "https://dispatchhub.com/fed/events",
  "events": ["packet.signed", "load.new"],
  "verify_key": "..."
}
```

### Dashboard

Coming soon: `/settings/integrations/webhooks`

---

## ✅ Responding

Your endpoint must respond with:

```http
HTTP/1.1 200 OK
```

Or FED will retry:

* 3 times with exponential backoff
* Max 15s timeout per attempt

---

## 📁 File Location
.project/docs/platforms/FED/webhooks.md