// packages/ui/accordiongroup/Accordiongroup.stories.tsx

import { AccordionGroup } from './web';

export default {
  title: 'UI/Accordiongroup',
  component: AccordionGroup,
  argTypes: {
    children: { control: 'text', defaultValue: 'Accordiongroup content' },
  },
};

export const Default = {
  args: {
    children: 'Accordiongroup content',
  },
};
