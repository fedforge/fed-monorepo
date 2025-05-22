// packages/ui/scrollarea/Scrollarea.stories.tsx

import { Scrollarea } from './web';

export default {
  title: 'UI/Scrollarea',
  component: Scrollarea,
  argTypes: {
    children: { control: 'text', defaultValue: 'Scrollarea content' },
  },
};

export const Default = {
  args: {
    children: 'Scrollarea content',
  },
};
