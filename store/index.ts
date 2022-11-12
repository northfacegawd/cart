import create from 'zustand';

import { isSame } from '@lib/utils';
import { Cart } from '@models/cart.model';
import { Product } from '@models/product.model';

interface CartStore {
  cartList: Cart[];
  lastUpdatedCart: Cart | null;
  updateCart: (product: Product, count?: number) => void;
  deleteCart: (id: Product['item_no']) => void;
  reset: () => void;
  getCartItem: (id: Product['item_no']) => Cart | undefined;
}

const useStore = create<CartStore>((set, get) => ({
  cartList: [],
  lastUpdatedCart: null,
  updateCart: (product, count: number = 1) =>
    set((state) => {
      const prevCartItem = state.cartList.find(({ item_no }) =>
        isSame(item_no, product.item_no),
      );
      if (!prevCartItem) {
        return {
          cartList: state.cartList.concat({ ...product, count }),
          lastUpdatedCart: { ...product, count: 1 },
        };
      }
      const newCartList = state.cartList.map((cart) =>
        isSame(cart.item_no, product.item_no)
          ? { ...cart, count: cart.count + count }
          : cart,
      );
      const fintCartItem = state.cartList.find((cart) =>
        isSame(cart.item_no, product.item_no),
      );
      return {
        cartList: newCartList,
        lastUpdatedCart: fintCartItem
          ? { ...fintCartItem, count: fintCartItem.count + count }
          : null,
      };
    }),
  reset: () => set({ cartList: [] }),
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
