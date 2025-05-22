// packages/ui/toast/Toast.stories.tsx

import { Toast } from './web';

export default {
  title: 'UI/Toast',
  component: Toast,
  argTypes: {
    children: { control: 'text', defaultValue: 'Toast content' },
  },
};

export const Default = {
  args: {
    children: 'Toast content',
  },
};
