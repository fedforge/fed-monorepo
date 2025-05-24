# @fed/monitoring

System monitoring and logging

## Installation

```bash
pnpm add @fed/monitoring
```

## Usage

```typescript
import { ... } from '@fed/monitoring'
```

## Structure
```
./packages/monitoring/src
├── alerts
│   └── index.ts
├── config
│   └── index.ts
├── constants
│   └── index.ts
├── index.ts
├── logging
│   └── index.ts
├── __tests__
│   └── index.ts
├── tracing
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
