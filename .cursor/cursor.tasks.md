# 🧠 Cursor AI Context: FED Project

## 📦 Project Overview
This is a full-stack, AI-powered monorepo for modern freight logistics.
It includes multiple apps and shared packages.

- Frontend: Next.js + TailwindCSS (Web + PWA)
- Mobile: Expo + Solito + Nativewind (Cross-platform)
- Backend: FastAPI (Python), OpenAPI Spec
- AI Stack: Autogen, Ray, LangGraph, MARK agent kernel
- Local Engines: LLaMA.cpp, OpenVINO, PyTorch, TenserFlow, TFLite
- Local Models: Mistral 7B (Q8), whisper, (unknown)
- Paid Models: gpt4o, gpt4, gpt3.5-turbo, (unknown)
- Shared Structure: Atomic Design (UI), Hooks, Types, Utils

---

## 🔍 Scope: What to Load into Context

### ✅ Scan & Embed These Paths
- `apps/web/app/**` → Web frontend (Next.js + PWA)
- `packages/ui/**` → Shared atomic UI components
- `packages/app/**` → Shared app logic: hooks, types, constants
- `docs/FED/**` → Project docs and planning
- `.project/**` → Project-specific metadata and planning

### ❌ Ignore These Paths
- `node_modules/`
- `.git/`
- `.next/`
- `.turbo/`
- `.output/`
- `.cache/`
- `*.log`

### 🎯 Target File Types
- `*.tsx`, `*.ts` → Core logic, components, routing
- `*.json` → Configs and schema
- `*.md` → Docs and context injection

---

## 🧠 Caching Strategy

Cache the following metadata:
- Top-level layout and page routes
- Component hierarchy (atomic UI)
- Shared hooks, utils, and providers
- Navigation logic and tabs
- Type definitions and usage
- API endpoints if defined in OpenAPI/FastAPI
- Model Prompts for local/paid engines

> Store everything in your working memory so future inline edits are aware of context.

---

## 📌 Rules for Cursor AI

- **W/R/X ACCESS** inside `.cursor/**/**/*` 
- **R/X ACCESS ONLY** `.continue/**/**/*` files.
- Do not read or index build artifacts.
- All embeddings and meta data collected needs to go inside `.cursor/__cache__/**/**/*`
- Treat `.project/` as high-priority planning data.
- Focus on summarizing first; edits will follow later.

---
