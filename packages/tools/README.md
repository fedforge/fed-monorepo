# @fed/tools

Development tools and scripts

## Installation

```bash
pnpm add @fed/tools
```

## Usage

```typescript
import { ... } from '@fed/tools'
```

## Structure
```
./packages/tools/src
├── ci
│   └── index.ts
├── config
│   └── index.ts
├── constants
│   └── index.ts
├── dev
│   └── index.ts
├── eslint
│   └── index.ts
├── generators
│   └── index.ts
├── index.ts
├── sandbox
│   ├── package.json
│   ├── README.md
│   ├── src
│   │   ├── config
│   │   ├── constants
│   │   ├── index.ts
│   │   ├── libs
│   │   ├── types
│   │   └── utils
│   ├── tests
│   │   └── setup.ts
│   └── tsconfig.json
├── scripts
│   ├── bash
│   │   ├── build-all.sh
│   │   ├── dev.sh
│   │   ├── organize-ui.sh
│   │   ├── reset-db.sh
│   │   └── sync-types.sh
│   └── README.md
├── testing
│   └── index.ts
├── types
│   └── index.ts
└── utils
    └── index.ts

20 directories, 21 files
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
