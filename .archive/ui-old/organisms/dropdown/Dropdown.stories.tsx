// packages/ui/dropdown/Dropdown.stories.tsx

import { Dropdown } from './web';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    children: { control: 'text', defaultValue: 'Dropdown content' },
  },
};

export const Default = {
  args: {
    children: 'Dropdown content',
  },
};

