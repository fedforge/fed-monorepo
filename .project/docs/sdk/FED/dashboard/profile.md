# FED Dashboard — Profile Management Panel

## 👤 Purpose

This panel allows individual dispatchers or fleet owners to:

- Update account info
- Change password / email
- Edit business/company details
- Upload profile picture or branding assets
- Manage notification + system preferences

---

## 🧱 Layout Sections

### 1. Personal Info

Fields:
- Name
- Email
- Phone
- Role (Dispatcher, Admin, etc.)
- Password reset (button/modal)

Use:
```tsx
import { Input, Button, AvatarUpload } from 'ui/*'
````

---

### 2. Company Details (if `isFleetAdmin === true`)

* Company Name
* DOT/MC Number
* EIN (optional)
* Logo Upload
* Fleet Size / Operating Region

---

### 3. Notification Preferences

* Toggle:

  * New load alerts
  * ELDA messages
  * Screening activity
* Frequency: Realtime / Daily Digest / None

---

### 4. Security Settings

* Change password (modal)
* Enable 2FA (coming soon)
* See login history (last 5 sessions)

---

## API Endpoints

* `GET /api/user/profile`
* `POST /api/user/update`
* `POST /api/user/change-password`

Example payload:

```json
{
  "name": "Jesse C.",
  "email": "jesse@fedispatching.com",
  "phone": "419-555-9012",
  "company": {
    "name": "Fast & Easy Dispatching LLC",
    "dot": "DOT123456",
    "mc": "MC654321"
  }
}
```

---

## Routing & File

* Path: `/dashboard/profile`
* File: `app/features/dashboard/profile.tsx`
* Docs: `.project/docs/platforms/FED/dashboard/profile.md`

---

## Cursor Directives

> Use form groups for user/company separation
> Wrap fields in saveable card blocks
> Optional avatar upload uses native + web component
> Only show company section if user is `fleetAdmin === true`

---

## File Location
.project/docs/platforms/FED/dashboard/profile.md