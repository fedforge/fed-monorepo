# @fed/api

API services and endpoints

## Installation

```bash
pnpm add @fed/api
```

## Usage

```typescript
import { ... } from '@fed/api'
```

## Structure
```
./packages/api/src
├── config
├── constants
├── controllers
│   └── index.ts
├── gateway
│   └── index.ts
├── graphql
│   └── index.ts
├── index.ts
├── libs
├── middleware
│   └── index.ts
├── models
│   └── index.ts
├── rest
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
