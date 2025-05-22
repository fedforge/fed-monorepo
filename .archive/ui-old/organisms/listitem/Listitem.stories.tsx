// packages/ui/listitem/Listitem.stories.tsx

import { Listitem } from './web';

export default {
  title: 'UI/Listitem',
  component: Listitem,
  argTypes: {
    children: { control: 'text', defaultValue: 'Listitem content' },
  },
};

export const Default = {
  args: {
    children: 'Listitem content',
  },
};

