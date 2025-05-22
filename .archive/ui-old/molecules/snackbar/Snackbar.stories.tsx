// packages/ui/snackbar/Snackbar.stories.tsx

import { Snackbar } from './web';

export default {
  title: 'UI/Snackbar',
  component: Snackbar,
  argTypes: {
    children: { control: 'text', defaultValue: 'Snackbar content' },
  },
};

export const Default = {
  args: {
    children: 'Snackbar content',
  },
};
