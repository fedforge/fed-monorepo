# @fed/features

Business features and modules

## Installation

```bash
pnpm add @fed/features
```

## Usage

```typescript
import { ... } from '@fed/features'
```

## Structure
```
./packages/features/src
├── auth
│   └── index.ts
├── components
│   └── index.ts
├── config
├── constants
├── context
│   └── index.ts
├── hooks
│   └── index.ts
├── index.ts
├── libs
├── notifications
│   └── index.ts
├── payments
│   └── index.ts
├── services
│   └── index.ts
├── __tests__
│   └── index.ts
├── types
├── users
│   └── index.ts
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
