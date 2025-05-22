// packages/ui/dialog/Dialog.stories.tsx

import { Dialog } from './web';

export default {
  title: 'UI/Dialog',
  component: Dialog,
  argTypes: {
    children: { control: 'text', defaultValue: 'Dialog content' },
  },
};

export const Default = {
  args: {
    children: 'Dialog content',
  },
};
