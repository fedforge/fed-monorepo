// packages/ui/accordion/Accordion.stories.tsx

import { Accordion } from './web';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  argTypes: {
    children: { control: 'text', defaultValue: 'Accordion content' },
  },
};

export const Default = {
  args: {
    children: 'Accordion content',
  },
};
