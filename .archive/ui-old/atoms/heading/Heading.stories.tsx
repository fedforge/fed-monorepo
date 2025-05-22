// packages/ui/heading/Heading.stories.tsx

import { Heading } from './web';

export default {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    children: { control: 'text', defaultValue: 'Heading content' },
  },
};

export const Default = {
  args: {
    children: 'Heading content',
  },
};
