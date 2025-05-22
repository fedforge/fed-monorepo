// packages/ui/badge/Badge.stories.tsx

import { Badge } from './web';

export default {
  title: 'UI/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text', defaultValue: 'Badge content' },
  },
};

export const Default = {
  args: {
    children: 'Badge content',
  },
};
