import create from 'zustand';

import { isSame } from '@lib/utils';
import { Product } from '@models/product.model';

interface Cart extends Product {
  count: number;
}

interface CartStore {
  cartList: Cart[];
  updateCart: (product: Product, count?: number) => void;
  deleteCart: (id: Product['item_no']) => void;
  getCartItem: (id: Product['item_no']) => Cart | undefined;
}

const useStore = create<CartStore>((set, get) => ({
  cartList: [],
  updateCart: (product, count: number = 1) =>
    set((state) => {
      const prevCartItem = state.cartList.find(({ item_no }) =>
        isSame(item_no, product.item_no),
      );
      if (!prevCartItem) {
        return {
          cartList: state.cartList.concat({ ...product, count }),
        };
      }
      const newCartList = state.cartList.map((cart) =>
        isSame(cart.item_no, product.item_no)
          ? { ...cart, count: cart.count + count }
          : cart,
      );
      return {
        cartList: newCartList,
      };
    }),
  deleteCart: (id) =>
    set((state) => ({
      cartList: state.cartList.filter((cart) => cart.item_no !== id),
    })),
  getCartItem: (id) => {
    const { cartList } = get();
    return cartList.find((cart) => cart.item_no === id);
  },
}));

export default useStore;
