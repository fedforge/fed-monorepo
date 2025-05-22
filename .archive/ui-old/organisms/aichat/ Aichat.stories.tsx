// packages/ui/aichat/Aichat.stories.tsx

import { Aichat } from './web';

export default {
  title: 'UI/Aichat',
  component: Aichat,
  argTypes: {
    children: { control: 'text', defaultValue: 'Aichat content' },
  },
};

export const Default = {
  args: {
    children: 'Aichat content',
  },
};
