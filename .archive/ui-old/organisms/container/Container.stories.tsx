// packages/ui/container/Container.stories.tsx

import { Container } from './web';

export default {
  title: 'UI/Container',
  component: Container,
  argTypes: {
    children: { control: 'text', defaultValue: 'Container content' },
  },
};

export const Default = {
  args: {
    children: 'Container content',
  },
};
