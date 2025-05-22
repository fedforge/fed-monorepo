# FED FAQ (Frequently Asked Questions)

_Last updated: 2025-05-18_

---

## 💡 GENERAL

### What is FED?

FED (Fast & Easy Dispatching) is an AI-powered dispatch platform designed to automate carrier packets, load board connections, broker screening, and driver support — all while keeping you in control. It’s powered by custom agents like PacketPilot, CargoConnect, ELDA, and the MARK kernel.

### Who is this built for?

- Solo dispatchers  
- Small fleets  
- VAs handling carriers  
- Independent logistics agents  
- AI-first transportation businesses

### Do I need an MC number to use FED?

Nope. FED is designed for dispatchers without MCs who operate legally under dispatcher-carrier agreements. You are not brokering freight — you're providing tech-enhanced dispatch services.

---

## 🧠 AI & AGENTS

### Does FED use OpenAI?

Yes — optionally. You can use OpenAI for Whisper and GPT if enabled, but FED also supports local models and encrypted local inference. Consent is required for all AI agent usage.

### What’s the MARK system?

MARK (Markdown Agent Routing Kernel) is the internal execution layer. It reads `.mark` files, routes logic between tools, and handles prompts and task plans across PacketPilot, ELDA, CargoConnect, and more.

### Can I trust FED to talk to brokers?

Yes. FED can whisper insight, screen for manipulation, or even respond via preset prompts. The system will never speak directly without your approval unless you're on a Boss plan with full AI delegation enabled.

---

## 💬 COMMUNICATION

### Can I record calls?

Yes — if enabled and permitted. Call summaries, screening flags, and rates are captured via Whisper, but **only with user consent**. You can export transcriptions or delete logs at any time.

### Does FED listen without permission?

Never. FED only activates Whisper, storage, or memory if your `.consent.md` or plan settings allow it.

---

## 📄 DOCUMENTS

### Can PacketPilot really autofill a broker packet?

Yes. It parses broker onboarding packets or PDFs, fills out required fields, and emails or downloads a completed form. It can even remember past broker formats for faster re-use.

### Can I sign packets with a finger?

Yes — mobile-friendly signature pads are included. Signature logs are stored securely with OpenHWY if enabled.

---

## 🔒 PRIVACY & LEGAL

### Do you store my dispatch data?

Not unless you allow it. All logs, call data, packets, and forms are stored locally or encrypted on OpenHWY with user consent. You may opt-out of all persistent memory.

### Is this DOT/FMC legal?

Yes. FED is a technology platform, not a broker. Dispatchers must sign and upload dispatcher-carrier agreements with their clients, which FED can help you generate and track.

### Can drivers opt out?

Yes. ELDA is optional for all drivers. They can disable AI chat, memory, or sync features.

---

## 💰 BILLING

### Can I get a refund?

No. All plans include a free trial tier to test the platform. Refunds are not issued after upgrade — usage is on you.

### What happens if I go over limits?

You’re charged transparently per unit:
- $1 per extra packet
- Extra minutes and forms billed by tier
- Cloud storage billed per GB/month

### Can I downgrade?

Yes. Your current usage will be archived but inactive features may be hidden after downgrade. Logs are retained for 90 days by default unless otherwise selected.

---

## ⚙️ TECH

### Can I use this offline?

Yes. FED supports **Offline Mode** with DuckDB, encrypted sync, and full fallback for packet filling, call logs, and task queueing. Data syncs automatically when reconnected.

### Can I build my own agent?

Yes. FED is built for developers, too. Use the MARK CLI, define new `.mark` workflows, and plug into FED via local code or OpenHWY’s API.

---

## File Location
.project/docs/FED/faq.md
