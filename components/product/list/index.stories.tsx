import { QueryClient, QueryClientProvider } from 'react-query';

import { getProducts } from '@mocks/handlers/products';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProductList from '.';

export default {
  title: 'Product List Component',
  component: ProductList,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = () => <ProductList />;

export const Default = Template.bind({});

Default.args = {};
Default.parameters = {
  msw: {
    handlers: [getProducts()],
  },
};
