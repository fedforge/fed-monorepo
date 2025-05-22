// packages/ui/connectiontile/Connectiontile.stories.tsx

import { Connectiontile } from './web';

export default {
  title: 'UI/Connectiontile',
  component: Connectiontile,
  argTypes: {
    children: { control: 'text', defaultValue: 'Connectiontile content' },
  },
};

export const Default = {
  args: {
    children: 'Connectiontile content',
  },
};
