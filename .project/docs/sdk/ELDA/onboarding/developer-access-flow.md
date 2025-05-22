# Request Free Tools

## Overview

This lightweight onboarding path is for users who don’t want to fully register, but want to download or receive access to free resources from FED and ELDA. These include sample packets, onboarding templates, dispatcher-carrier contracts, and more.

It’s a marketing-to-activation step — not a full account creation.

---

## Form Fields (Minimum)

```yaml
form:
  - name (required)
  - email (required)
  - role:
      - dispatcher
      - driver
      - fleet owner
      - broker
      - developer
      - just browsing
  - interest:
      - PacketPilot demo
      - Dispatcher onboarding contract
      - Free tools ZIP
      - ELDA safety flashcards
      - API docs (dev mode)
  - consent:
      - [x] I understand these are demo tools and not for resale.
      - [x] I agree to be contacted if new tools are published.
````

---

## What Happens After Submit

* User receives email with tool access link
* Link points to public GitHub repo, Google Drive, or DuckDB bundle ZIP
* If developer access is requested → optional invite to test sandbox environment

---

## Smart Behavior

* User is added to `soft_user_pool` in local DuckDB if on device
* Role/interest tags help FED track conversion (optional)
* No account is created unless the user follows through with onboarding

---

## Example Welcome Message

```txt
Thanks for reaching out to FED.

Here’s your free tool access:
- [Dispatcher Contract Template]
- [PacketPilot Demo Packet]
- [ELDA Safety Flashcards PDF]

If you ever want to unlock more, just reply or visit fedispatching.com.
```

---

## File Location
.project/docs/ELDA/onboarding/request-free-tools.md