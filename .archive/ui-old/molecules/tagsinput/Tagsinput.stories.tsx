// packages/ui/tagsinput/Tagsinput.stories.tsx

import { Tagsinput } from './web';

export default {
  title: 'UI/Tagsinput',
  component: Tagsinput,
  argTypes: {
    children: { control: 'text', defaultValue: 'Tagsinput content' },
  },
};

export const Default = {
  args: {
    children: 'Tagsinput content',
  },
};
