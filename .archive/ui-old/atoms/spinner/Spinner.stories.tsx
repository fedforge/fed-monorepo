// packages/ui/spinner/Spinner.stories.tsx

import { Spinner } from './web';

export default {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    children: { control: 'text', defaultValue: 'Spinner content' },
  },
};

export const Default = {
  args: {
    children: 'Spinner content',
  },
};
