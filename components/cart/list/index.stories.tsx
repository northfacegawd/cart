import { PRODUCTS } from '@constant/product';
import { Product } from '@models/product.model';
import useStore from '@store/index';
import { useEffect } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartItemList from '.';

export default {
  title: 'Cart Item List Component',
  component: CartItemList,
} as ComponentMeta<typeof CartItemList>;

const Template: ComponentStory<typeof CartItemList> = () => <CartItemList />;
export const Default = Template.bind({});
Default.args = {
  productList: PRODUCTS,
};
Default.decorators = [
  (Story, options) => {
    const updateCart = useStore((state) => state.updateCart);
    const reset = useStore((state) => state.reset);
    useEffect(() => {
      options.args.productList.forEach((product: Product) =>
        updateCart(product),
      );
      return () => {
        reset();
      };
    }, []);
    return <Story />;
  },
];
