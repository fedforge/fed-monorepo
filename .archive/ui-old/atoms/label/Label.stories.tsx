// packages/ui/label/Label.stories.tsx

import { Label } from './web';

export default {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    children: { control: 'text', defaultValue: 'Label content' },
  },
};

export const Default = {
  args: {
    children: 'Label content',
  },
};
