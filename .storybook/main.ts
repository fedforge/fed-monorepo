// .storybook/main.js
// main.js

import { dirname, join } from 'path'

/**
 * Resolves package paths in monorepos (PNPM, Yarn PnP, etc)
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config = {
  stories: ['../**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    tsconfigPath: './tsconfig.storybook.json', // isolated config
  },
}

export default config
