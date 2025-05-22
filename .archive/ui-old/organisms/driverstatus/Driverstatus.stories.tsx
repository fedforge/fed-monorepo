// packages/ui/driverstatus/Driverstatus.stories.tsx

import { Driverstatus } from './web';

export default {
  title: 'UI/Driverstatus',
  component: Driverstatus,
  argTypes: {
    children: { control: 'text', defaultValue: 'Driverstatus content' },
  },
};

export const Default = {
  args: {
    children: 'Driverstatus content',
  },
};
