// packages/ui/collapse/Collapse.stories.tsx

import { Collapse } from './web';

export default {
  title: 'UI/Collapse',
  component: Collapse,
  argTypes: {
    children: { control: 'text', defaultValue: 'Collapse content' },
  },
};

export const Default = {
  args: {
    children: 'Collapse content',
  },
};
