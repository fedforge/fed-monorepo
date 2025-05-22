// packages/ui/stepper/Stepper.stories.tsx

import { Stepper } from './web';

export default {
  title: 'UI/Stepper',
  component: Stepper,
  argTypes: {
    children: { control: 'text', defaultValue: 'Stepper content' },
  },
};

export const Default = {
  args: {
    children: 'Stepper content',
  },
};
