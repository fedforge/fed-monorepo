// packages/ui/formgroup/Formgroup.stories.tsx

import { Formgroup } from './web';

export default {
  title: 'UI/Formgroup',
  component: Formgroup,
  argTypes: {
    children: { control: 'text', defaultValue: 'Formgroup content' },
  },
};

export const Default = {
  args: {
    children: 'Formgroup content',
  },
};
