// packages/ui/fileupload/Fileupload.stories.tsx

import { Fileupload } from './web';

export default {
  title: 'UI/Fileupload',
  component: Fileupload,
  argTypes: {
    children: { control: 'text', defaultValue: 'Fileupload content' },
  },
};

export const Default = {
  args: {
    children: 'Fileupload content',
  },
};
