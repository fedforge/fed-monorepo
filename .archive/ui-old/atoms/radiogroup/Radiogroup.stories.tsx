// packages/ui/radiogroup/Radiogroup.stories.tsx

import { Radiogroup } from './web';

export default {
  title: 'UI/Radiogroup',
  component: Radiogroup,
  argTypes: {
    children: { control: 'text', defaultValue: 'Radiogroup content' },
  },
};

export const Default = {
  args: {
    children: 'Radiogroup content',
  },
};
