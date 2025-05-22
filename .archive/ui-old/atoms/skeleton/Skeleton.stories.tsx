// packages/ui/skeleton/Skeleton.stories.tsx

import { Skeleton } from './web';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
  argTypes: {
    children: { control: 'text', defaultValue: 'Skeleton content' },
  },
};

export const Default = {
  args: {
    children: 'Skeleton content',
  },
};
