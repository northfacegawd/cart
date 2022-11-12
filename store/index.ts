import create from 'zustand';

import { isSame } from '@lib/utils';
import { Cart } from '@models/cart.model';
import { Product } from '@models/product.model';

interface CartStore {
  cartList: Cart[];
  lastUpdatedCart: Cart | null;
  addCart: (product: Product, count?: number) => void;
  updateCart: (id: Product['item_no'], type: 'up' | 'down') => void;
  deleteCart: (id: Product['item_no']) => void;
  reset: () => void;
  getCartItem: (id: Product['item_no']) => Cart | undefined;
}

const useStore = create<CartStore>((set, get) => ({
  cartList: [],
  lastUpdatedCart: null,
  addCart: (product, count: number = 1) =>
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
  updateCart: (id, type) =>
    set((state) => {
      const newCartList = state.cartList.map((cart) => {
        if (isSame(cart.item_no, id)) {
          return {
            ...cart,
            count: type === 'up' ? cart.count + 1 : cart.count - 1,
          };
        }
        return cart;
      });
      return { cartList: newCartList, lastUpdatedCart: null };
    }),
  deleteCart: (id) =>
    set((state) => ({
      cartList: state.cartList.filter((cart) => cart.item_no !== id),
      lastUpdatedCart: null,
    })),
  reset: () => set({ cartList: [], lastUpdatedCart: null }),
  getCartItem: (id) => {
    const { cartList } = get();
    return cartList.find((cart) => cart.item_no === id);
  },
}));

export default useStore;
