# FED Dashboard — Document Management Panel

## 🗂️ Purpose

This dashboard screen gives dispatchers and agents a full view of uploaded documents.  
It integrates OCR + GPT vision for intelligent parsing, tagging, and structuring of paperwork.

Docs include:
- Carrier Packets
- Rate Confirmations (Ratecons)
- Bills of Lading (BOLs)
- Broker Agreements
- Signed Forms

---

## 🧱 Page Layout

### 1. Document Table

- Filename
- Type (packet, ratecon, etc.)
- Status (parsed, pending, flagged)
- Tags (e.g. “FedEx”, “Missing Signature”)
- Actions: View, Edit Tags, Download, Remove

Component:
```tsx
import { DataTable, Tag, StatusBadge, IconButton } from 'ui/*'
````

---

### 2. Upload Area

Drag-and-drop zone for file upload:

* Accept: `.pdf`, `.png`, `.jpg`, `.docx`
* Auto-detect type via GPT or internal logic
* Start parsing in background on drop

```tsx
import { FileUpload, UploadDropzone } from 'ui/fileupload'
```

---

### 3. Document Preview Modal

On click:

* Full doc preview (PDF or image)
* Extracted fields (MC#, address, etc.)
* JSON output toggle
* “Fix missing fields” prompt box

---

### 4. Tag Editor & Search

Allow:

* Manual tag edit (`+ Add Tag`)
* Search by tag or type
* Saved filters

---

## OCR & AI Parsing Flow

1. File dropped
2. Trigger `/api/docs/upload`
3. Background job parses content → GPT (Vision) or Tesseract
4. Outputs normalized document JSON

Example:

```json
{
  "type": "ratecon",
  "carrier": "ABX Logistics",
  "pickup_date": "2025-05-20",
  "rate": 1450,
  "notes": "Needs signature"
}
```

---

## Routing & File

* Path: `/dashboard/documents`
* File: `app/features/dashboard/documents.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/documents.md`

---

## Cursor Directives

> Use `DataTable` + `FileUpload`
> Generate mock documents in `utils/sample-docs.ts`
> Always allow tag edit mode
> Parse filename to guess doc type if no metadata found

---

## File Location
.project/docs/platforms/FED/dashboard/documents.md