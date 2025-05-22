// packages/ui/autocomplete/Autocomplete.stories.tsx

import { Autocomplete } from './web';

export default {
  title: 'UI/Autocomplete',
  component: Autocomplete,
  argTypes: {
    children: { control: 'text', defaultValue: 'Autocomplete content' },
  },
};

export const Default = {
  args: {
    children: 'Autocomplete content',
  },
};
