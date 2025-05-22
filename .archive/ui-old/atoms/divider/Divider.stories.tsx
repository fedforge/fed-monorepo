// packages/ui/divider/Divider.stories.tsx

import { Divider } from './web';

export default {
  title: 'UI/Divider',
  component: Divider,
  argTypes: {
    children: { control: 'text', defaultValue: 'Divider content' },
  },
};

export const Default = {
  args: {
    children: 'Divider content',
  },
};
