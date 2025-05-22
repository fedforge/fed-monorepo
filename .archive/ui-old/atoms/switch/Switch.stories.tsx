// packages/ui/switch/Switch.stories.tsx

import { Switch } from './web';

export default {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {
    children: { control: 'text', defaultValue: 'Switch content' },
  },
};

export const Default = {
  args: {
    children: 'Switch content',
  },
};
