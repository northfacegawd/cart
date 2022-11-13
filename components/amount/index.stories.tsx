import { QueryClient, QueryClientProvider } from 'react-query';

import { types } from '@babel/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Amount from '.';

export default {
  title: 'Amount Component',
  component: Amount,
  decorators: [
    (Story) => {
      const client = new QueryClient();
      return (
        <QueryClientProvider client={client}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} as ComponentMeta<typeof Amount>;

const Template: ComponentStory<typeof Amount> = () => <Amount />;
export const Default = Template.bind({});
