# @fed/infrastructure

Infrastructure and deployment

## Installation

```bash
pnpm add @fed/infrastructure
```

## Usage

```typescript
import { ... } from '@fed/infrastructure'
```

## Structure
```
./packages/infrastructure/src
├── aws
│   └── index.ts
├── config
│   └── index.ts
├── constants
│   └── index.ts
├── docker
│   └── index.ts
├── index.ts
├── kubernetes
│   └── index.ts
├── terraform
│   └── index.ts
├── types
│   └── index.ts
└── utils
    └── index.ts

9 directories, 9 files
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
