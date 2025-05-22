// packages/ui/card/Card.stories.tsx

import { Card } from './web';

export default {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    children: { control: 'text', defaultValue: 'Card content' },
  },
};

export const Default = {
  args: {
    children: 'Card content',
  },
};
