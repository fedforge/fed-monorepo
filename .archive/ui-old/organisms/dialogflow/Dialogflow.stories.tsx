// packages/ui/dialogflow/Dialogflow.stories.tsx

import { Dialogflow } from './web';

export default {
  title: 'UI/Dialogflow',
  component: Dialogflow,
  argTypes: {
    children: { control: 'text', defaultValue: 'Dialogflow content' },
  },
};

export const Default = {
  args: {
    children: 'Dialogflow content',
  },
};
