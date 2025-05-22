// packages/ui/popover/Popover.stories.tsx

import { Popover } from './web';

export default {
  title: 'UI/Popover',
  component: Popover,
  argTypes: {
    children: { control: 'text', defaultValue: 'Popover content' },
  },
};

export const Default = {
  args: {
    children: 'Popover content',
  },
};
