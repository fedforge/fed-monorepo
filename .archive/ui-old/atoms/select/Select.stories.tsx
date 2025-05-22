// packages/ui/select/Select.stories.tsx

import { Select } from './web';

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {
    children: { control: 'text', defaultValue: 'Select content' },
  },
};

export const Default = {
  args: {
    children: 'Select content',
  },
};
