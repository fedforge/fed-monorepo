// packages/ui/slider/Slider.stories.tsx

import { Slider } from './web';

export default {
  title: 'UI/Slider',
  component: Slider,
  argTypes: {
    children: { control: 'text', defaultValue: 'Slider content' },
  },
};

export const Default = {
  args: {
    children: 'Slider content',
  },
};
