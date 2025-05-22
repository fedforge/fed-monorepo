// packages/ui/paragraph/Paragraph.stories.tsx

import { Paragraph } from './web';

export default {
  title: 'UI/Paragraph',
  component: Paragraph,
  argTypes: {
    children: { control: 'text', defaultValue: 'Paragraph content' },
  },
};

export const Default = {
  args: {
    children: 'Paragraph content',
  },
};

