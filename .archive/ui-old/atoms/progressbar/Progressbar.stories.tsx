// packages/ui/progressbar/Progressbar.stories.tsx

import { Progressbar } from './web';

export default {
  title: 'UI/Progressbar',
  component: Progressbar,
  argTypes: {
    children: { control: 'text', defaultValue: 'Progressbar content' },
  },
};

export const Default = {
  args: {
    children: 'Progressbar content',
  },
};
