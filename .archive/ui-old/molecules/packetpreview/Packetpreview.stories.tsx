// packages/ui/packetpreview/Packetpreview.stories.tsx

import { Packetpreview } from './web';

export default {
  title: 'UI/Packetpreview',
  component: Packetpreview,
  argTypes: {
    children: { control: 'text', defaultValue: 'Packetpreview content' },
  },
};

export const Default = {
  args: {
    children: 'Packetpreview content',
  },
};
