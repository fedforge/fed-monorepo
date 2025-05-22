// packages/ui/sidebarnav/Sidebarnav.stories.tsx

import { Sidebarnav } from './web';

export default {
  title: 'UI/Sidebarnav',
  component: Sidebarnav,
  argTypes: {
    children: { control: 'text', defaultValue: 'Sidebarnav content' },
  },
};

export const Default = {
  args: {
    children: 'Sidebarnav content',
  },
};
