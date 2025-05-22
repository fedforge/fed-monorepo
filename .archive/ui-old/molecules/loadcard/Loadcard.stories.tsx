// packages/ui/loadcard/Loadcard.stories.tsx

import { Loadcard } from './web';

export default {
  title: 'UI/Loadcard',
  component: Loadcard,
  argTypes: {
    children: { control: 'text', defaultValue: 'Loadcard content' },
  },
};

export const Default = {
  args: {
    children: 'Loadcard content',
  },
};

