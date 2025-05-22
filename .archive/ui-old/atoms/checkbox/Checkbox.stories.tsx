// packages/ui/checkbox/Checkbox.stories.tsx

import { Checkbox } from './web';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    children: { control: 'text', defaultValue: 'Checkbox content' },
  },
};

export const Default = {
  args: {
    children: 'Checkbox content',
  },
};
