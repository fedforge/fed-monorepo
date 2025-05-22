// packages/ui/stack/Stack.stories.tsx

import { Stack } from './web';

export default {
  title: 'UI/Stack',
  component: Stack,
  argTypes: {
    children: { control: 'text', defaultValue: 'Stack content' },
  },
};

export const Default = {
  args: {
    children: 'Stack content',
  },
};
