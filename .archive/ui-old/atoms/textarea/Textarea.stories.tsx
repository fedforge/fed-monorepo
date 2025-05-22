// packages/ui/textarea/Textarea.stories.tsx

import { Textarea } from './web';

export default {
  title: 'UI/Textarea',
  component: Textarea,
  argTypes: {
    children: { control: 'text', defaultValue: 'Textarea content' },
  },
};

export const Default = {
  args: {
    children: 'Textarea content',
  },
};
