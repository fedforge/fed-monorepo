# @fed/sdk

Client SDKs

## Installation

```bash
pnpm add @fed/sdk
```

## Usage

```typescript
import { ... } from '@fed/sdk'
```

## Structure
```
./packages/sdk/src
├── config
├── constants
├── controllers
│   └── index.ts
├── index.ts
├── js
│   └── index.ts
├── libs
├── middleware
│   └── index.ts
├── mobile
│   └── index.ts
├── models
│   └── index.ts
├── python
│   └── index.ts
├── routes
│   └── index.ts
├── services
│   └── index.ts
├── __tests__
│   └── index.ts
├── types
└── utils

15 directories, 10 files
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
