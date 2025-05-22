// packages/ui/tabs/Tabs.stories.tsx

import { Tabs } from './web';

export default {
  title: 'UI/Tabs',
  component: Tabs,
  argTypes: {
    children: { control: 'text', defaultValue: 'Tabs content' },
  },
};

export const Default = {
  args: {
    children: 'Tabs content',
  },
};
