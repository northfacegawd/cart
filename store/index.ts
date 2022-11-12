import create from 'zustand';

import { Cart } from '@models/cart.model';
import { Product } from '@models/product.model';

interface CartStore {
  cartList: Map<Cart['item_no'], Cart>;
  lastUpdatedCart: Cart | null;
  addCart: (product: Product, count?: number) => void;
  updateCart: (id: Product['item_no'], type: 'up' | 'down') => void;
  deleteCart: (id: Product['item_no']) => void;
  reset: () => void;
  getCartItem: (id: Product['item_no']) => Cart | undefined;
}

const useStore = create<CartStore>((set, get) => ({
  cartList: new Map(),
  lastUpdatedCart: null,
  addCart: (product, count: number = 1) =>
    set((state) => {
      const prevCartItem = state.cartList.get(product.item_no);
      if (!prevCartItem) {
        return {
          cartList: new Map([
            ...state.cartList,
            [product.item_no, { ...product, count }],
          ]),
          lastUpdatedCart: { ...product, count: 1 },
        };
      }
      return {
        cartList: new Map([
          ...state.cartList,
          [
            product.item_no,
            { ...prevCartItem, count: prevCartItem.count + count },
          ],
        ]),
        lastUpdatedCart: prevCartItem,
      };
    }),
  updateCart: (id, type) =>
    set((state) => {
      const cartItem = state.cartList.get(id);
      if (!cartItem) throw Error();
      return {
        cartList: new Map([
          ...state.cartList,
          [
            id,
            {
              ...cartItem,
              count: type === 'up' ? cartItem.count + 1 : cartItem.count - 1,
            },
          ],
        ]),
        lastUpdatedCart: null,
      };
    }),
  deleteCart: (id) =>
    set((state) => {
      const newMap = new Map(state.cartList);
      newMap.delete(id);
      return {
        cartList: newMap,
        lastUpdatedCart: null,
      };
    }),
  reset: () => set({ cartList: new Map(), lastUpdatedCart: null }),
  getCartItem: (id) => {
    const { cartList } = get();
    return cartList.get(id);
  },
}));

export default useStore;
