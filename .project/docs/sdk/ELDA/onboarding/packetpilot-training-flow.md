# PacketPilot Training Flow

## Overview

This onboarding flow is for **new dispatchers**, **VAs**, or **fleet owners** who want to unlock PacketPilot's full automation capabilities. 

PacketPilot is not accessible until the user completes required steps:
- Learning the compliance and structure of packets
- Uploading a sample RateCon and MC document
- Passing the intro walkthrough with ELDA

---

## Step 1 — Welcome to PacketPilot

```plaintext
Meet PacketPilot 👋  
Your AI assistant for broker packet automation.  
To unlock full automation features, complete the steps below.
````

\[ Start Training ] (CTA)

---

## Step 2 — Packet Fundamentals

**Video Module**

* "What is a Broker Packet?"
* "Understanding MC Authority & W9 Forms"
* "Common Packet Mistakes & How to Avoid Them"

\[ Next ]

---

## Step 3 — Upload Mock Packet

```plaintext
Upload the following:
- Sample MC Certificate (PDF or Image)
- Sample Rate Confirmation (PDF)

This is used only for AI tuning and is discarded after session unless saved.
```

\[ Upload Documents ]
\[ Skip (Limited Mode) ]

---

## Step 4 — Test Run

**Live Packet Fill Demo (Sandbox Mode)**

* You’re shown a blank broker packet
* AI auto-fills fields from uploaded RateCon & MC sample
* You confirm accuracy and mark any incorrect fields

\[ Approve Sample ]
\[ Try Again ]

---

## Step 5 — Unlock Confirmation

```plaintext
✅ PacketPilot Ready!  
You’ve completed the onboarding and can now:
- Auto-fill packets from PDFs
- Store packet scripts
- Use PacketPilot on mobile & desktop
```

\[ Go to Dashboard ]

---

## Smart Behavior

* If user skips upload, PacketPilot enters "Learning Mode" and requires manual review on every fill
* If user uploads and confirms once, PacketPilot caches the fill strategy by layout type (not content)
* Future uploads of matching layout will auto-trigger script mapping

---

## File Location
.project/docs/ELDA/onboarding/packetpilot-training-flow.md