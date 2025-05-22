// packages/ui/errorboundary/Errorboundary.stories.tsx

import { Errorboundary } from './web';

export default {
  title: 'UI/Errorboundary',
  component: Errorboundary,
  argTypes: {
    children: { control: 'text', defaultValue: 'Errorboundary content' },
  },
};

export const Default = {
  args: {
    children: 'Errorboundary content',
  },
};

