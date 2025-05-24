# @fed/shared

Shared utilities and common functionality

## Installation

```bash
pnpm add @fed/shared
```

## Usage

```typescript
import { ... } from '@fed/shared'
```

## Structure
```
./packages/shared/src
├── config
├── constants
├── hooks
│   ├── useDebounce.ts
│   └── useMockSession.ts
├── i18n
│   └── locale
│       ├── de.json
│       ├── en.json
│       ├── es.json
│       └── fr.json
├── index.ts
├── libs
├── logic
├── __tests__
│   └── index.ts
├── types
└── utils
    └── cn.ts

11 directories, 9 files
```

## Development

```bash
# Build
pnpm build

# Development with watch mode
pnpm dev

# Run tests
pnpm test

# Lint
pnpm lint
```
