// packages/ui/grid/Grid.stories.tsx

import { Grid } from './web';

export default {
  title: 'UI/Grid',
  component: Grid,
  argTypes: {
    children: { control: 'text', defaultValue: 'Grid content' },
  },
};

export const Default = {
  args: {
    children: 'Grid content',
  },
};
