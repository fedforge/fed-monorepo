// packages/ui/tooltip/Tooltip.stories.tsx

import { Tooltip } from './web';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
  argTypes: {
    children: { control: 'text', defaultValue: 'Tooltip content' },
  },
};

export const Default = {
  args: {
    children: 'Tooltip content',
  },
};
