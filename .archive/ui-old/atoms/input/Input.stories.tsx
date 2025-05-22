// packages/ui/input/Input.stories.tsx

import { Input } from './web';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    children: { control: 'text', defaultValue: 'Input content' },
  },
};

export const Default = {
  args: {
    children: 'Input content',
  },
};

