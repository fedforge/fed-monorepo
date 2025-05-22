// packages/ui/notificationbar/Notificationbar.stories.tsx

import { Notificationbar } from './web';

export default {
  title: 'UI/Notificationbar',
  component: Notificationbar,
  argTypes: {
    children: { control: 'text', defaultValue: 'Notificationbar content' },
  },
};

export const Default = {
  args: {
    children: 'Notificationbar content',
  },
};
