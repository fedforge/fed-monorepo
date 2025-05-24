# @fed/config

Configuration management

## Installation

```bash
pnpm add @fed/config
```

## Usage

```typescript
import { ... } from '@fed/config'
```

## Structure
```
./packages/config/src
├── build
│   └── index.ts
├── config
│   └── index.ts
├── constants
│   └── index.ts
├── env
│   └── index.ts
├── features
│   └── index.ts
├── index.ts
├── runtime
│   └── index.ts
├── secrets
│   └── index.ts
├── types
│   └── index.ts
└── utils
    └── index.ts

10 directories, 10 files
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
