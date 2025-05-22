// packages/ui/dialogconfirm/Dialogconfirm.stories.tsx

import { Dialogconfirm } from './web';

export default {
  title: 'UI/Dialogconfirm',
  component: Dialogconfirm,
  argTypes: {
    children: { control: 'text', defaultValue: 'Dialogconfirm content' },
  },
};

export const Default = {
  args: {
    children: 'Dialogconfirm content',
  },
};
