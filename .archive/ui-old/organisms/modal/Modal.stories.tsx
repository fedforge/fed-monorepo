// packages/ui/modal/Modal.stories.tsx

import { Modal } from './web';

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    children: { control: 'text', defaultValue: 'Modal content' },
  },
};

export const Default = {
  args: {
    children: 'Modal content',
  },
};
