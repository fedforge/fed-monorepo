# FED Dashboard — Loadboard Panel

## 🚚 Purpose

This screen is a dispatcher’s interface to **browse, filter, and act on loads**.  
It connects with CargoConnect, user-linked boards (DAT, TruckStop), and internal load APIs.

It supports:
- Live syncing
- Load filtering (state, price, equipment)
- Saved searches
- Load claiming and dispatch initiation

---

## 🔳 Page Sections

### 1. Search Filters

Top-row panel with:
- Origin / Destination
- Equipment Type
- Min Price
- Load Age (new, stale)
- Board Source (DAT, TQL, Manual)

Use:
```tsx
import { Input, Select, FilterBar, Button } from 'ui/*'
````

---

### 2. Load Results Grid

Each result is a `LoadCard` with:

* Broker + contact
* Pickup/drop
* Miles + Rate
* “Claim” or “Call” action
* Board source (DAT, Truckstop, Manual)

Optional badge:

```tsx
<Badge variant="secondary">From DAT</Badge>
```

---

### 3. Saved Views (Sidebar)

Left sidebar with saved filters:

* “\$2.50/mi TX → OH”
* “Flatbed 500mi Radius”
* “TQL + >\$1,000”

`onClick` loads filter query

---

### 4. Map Modal (Optional)

Clicking “View Map” shows:

* Pickup/drop pins
* Route miles
* Alternate matches

Only render if screen size allows
Use:

```tsx
import { Modal, DriverMap } from 'ui/*'
```

---

## API Integration

```http
GET /api/loads
```

```json
[
  {
    "id": "load-9231",
    "origin": "Dallas, TX",
    "destination": "Columbus, OH",
    "rate": 1850,
    "miles": 1050,
    "equipment": "Van",
    "source": "DAT",
    "broker": "Sunset Logistics"
  }
]
```

---

## Routing & File

* Path: `/dashboard/loads`
* File: `app/features/dashboard/loads.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/loads.md`

---

## Cursor Directives

> Use `LoadCard` from `packages/ui`
> Search filters go above the results
> Load API mock into `/utils/fetch-loads.ts`
> Route “Claim” to a dispatch intent via `/api/dispatch/create`

---

## File Location
.project/docs/platforms/FED/dashboard/loads.md