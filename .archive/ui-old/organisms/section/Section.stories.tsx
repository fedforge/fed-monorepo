// packages/ui/section/Section.stories.tsx

import { Section } from './web';

export default {
  title: 'UI/Section',
  component: Section,
  argTypes: {
    children: { control: 'text', defaultValue: 'Section content' },
  },
};

export const Default = {
  args: {
    children: 'Section content',
  },
};
