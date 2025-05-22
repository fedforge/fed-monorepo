// packages/ui/drawer/Drawer.stories.tsx

import { Drawer } from './web';

export default {
  title: 'UI/Drawer',
  component: Drawer,
  argTypes: {
    children: { control: 'text', defaultValue: 'Drawer content' },
  },
};

export const Default = {
  args: {
    children: 'Drawer content',
  },
};
