# @fed/ui

UI components and design system

## Installation

```bash
pnpm add @fed/ui
```

## Usage

```typescript
import { ... } from '@fed/ui'
```

## Structure
```
./packages/ui/src
├── components
│   ├── atoms
│   │   └── index.ts
│   ├── index.ts
│   ├── molecules
│   │   └── index.ts
│   └── organisms
│       └── index.ts
├── config
│   ├── index.ts
│   ├── polymorphic.ts
│   ├── props.ts
│   ├── rn-variants.ts
│   └── variants.ts
├── constants
├── hooks
│   └── index.ts
├── index.ts
├── layouts
│   └── index.ts
├── libs
├── styles
│   └── index.ts
├── __tests__
│   └── index.ts
├── themes
│   └── index.ts
├── types
└── utils

15 directories, 15 files
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
