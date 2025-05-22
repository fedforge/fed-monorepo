// packages/ui/avatar/Avatar.stories.tsx

import { Avatar } from './web';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  argTypes: {
    children: { control: 'text', defaultValue: 'Avatar content' },
  },
};

export const Default = {
  args: {
    children: 'Avatar content',
  },
};
