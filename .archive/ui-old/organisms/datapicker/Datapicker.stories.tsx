// packages/ui/datapicker/Datapicker.stories.tsx

import { Datapicker } from './web';

export default {
  title: 'UI/Datapicker',
  component: Datapicker,
  argTypes: {
    children: { control: 'text', defaultValue: 'Datapicker content' },
  },
};

export const Default = {
  args: {
    children: 'Datapicker content',
  },
};
