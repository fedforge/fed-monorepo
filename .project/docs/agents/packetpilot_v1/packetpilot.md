# PacketPilot

## Overview

PacketPilot is FED’s first and most important agent.

It automates the **reading**, **filling**, and **submission** of broker packets using:
- Uploaded PDFs (ratecons, W9s, MC certs)
- Dispatcher profile data
- Intelligent autofill scripts
- API-ready packet submission engines

---

## Key Capabilities

| Feature                  | Description                                      |
|--------------------------|--------------------------------------------------|
| `pdf_parsing`            | Extracts form field data from PDFs               |
| `json_autofill`          | Converts dispatcher data to packet-ready JSON    |
| `signature_injection`    | Applies dispatcher’s saved signature             |
| `email_submission`       | Sends completed packet to broker if allowed      |
| `script_caching`         | Learns packet layouts and reuses them instantly  |
| `validation_check`       | Checks for missing required fields before send   |

---

## Input Requirements

```yaml
inputs:
  - rate_confirmation.pdf
  - mc_certificate.pdf
  - w9.pdf (optional)
  - dispatcher_profile.json
````

---

## Output Example

```json
{
  "company_name": "Easy Dispatching LLC",
  "mc_number": "1234567",
  "address": "123 Road St, TX",
  "email": "team@fed.com",
  "signature": "[base64string]",
  "submission_status": "pending"
}
```

---

## Usage Modes

| Mode      | Triggered By                 | Output                    |
| --------- | ---------------------------- | ------------------------- |
| Dashboard | Button click                 | Packet preview + autofill |
| MARK CLI  | `mark packet.mark`           | JSON + PDF output         |
| API       | `POST /api/packetpilot/fill` | Structured data for UI    |

---

## Memory Behavior

* Learns layout of each broker's packet (TQL, CH Robinson, etc.)
* Caches fill logic tied to layout name
* If layout match found → instant fill
* If unknown layout → prompt user for review

---

## Privacy & Compliance

* No sensitive user data is stored unless user chooses to cache profile
* PacketPilot never sends a packet unless approved
* Signature injection is disabled by default unless consent is logged

---

## MARK Example

```markdown
@agent packetpilot
@input ratecon.pdf
@input dispatcher-profile.json
@output filled_packet.json

Fill this packet based on dispatcher profile.
```

---

## Developer Integration

```ts
const res = await fetch('/api/packetpilot/fill', {
  method: 'POST',
  body: JSON.stringify({
    ratecon: fileBuffer,
    dispatcher: profileJson
  })
})
```

---

## Related Files

```
.project/agents/packetpilot/
├── tool.md
├── tool.marks
├── prompts/
│   └── packet-fill.mark
├── logic/
│   └── fill.py
├── components/
│   └── PacketForm.tsx
```

---

## File Location
.project/docs/agents/packetpilot.md