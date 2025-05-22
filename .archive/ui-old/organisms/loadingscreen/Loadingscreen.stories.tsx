// packages/ui/loadingscreen/Loadingscreen.stories.tsx

import { Loadingscreen } from './web';

export default {
  title: 'UI/Loadingscreen',
  component: Loadingscreen,
  argTypes: {
    children: { control: 'text', defaultValue: 'Loadingscreen content' },
  },
};

export const Default = {
  args: {
    children: 'Loadingscreen content',
  },
};
