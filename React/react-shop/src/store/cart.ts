import { atom, selector } from "recoil";
import { productsList } from "./products";
import { CART_ITEM } from "../constants/category";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

export const cartCount = selector<number>({
  key: "cartCount",
  get: ({ get }) => {
    const cartItems = get(cartState)?.items || {};
    return Object.keys(cartItems).reduce((acc: number, index: string) => {
      return acc + cartItems[index].count || 0;
    }, 0);
  },
});

export const cartTotal = selector<number>({
  key: "cartTotal",
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState)?.items || {};
    return (
      Object.keys(cartItems).reduce((acc: number, id: string) => {
        return acc + cartItems[id].count * products[parseInt(id) - 1].price || 0;
      }, 0) || 0
    );
  },
});

export const cartList = selector<ICartItems[]>({
  key: "cartList",
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState)?.items;
    if (!cartItems) return [];
    /**
     * .map() 대신 .flatMap()을 사용하여, 상품을 찾지 못한 경우 빈 배열을 반환하고,
     * 이를 최종 배열에서 제거합니다.
     * 이 방법으로 null 또는 undefined 값을 건너뛸 수 있습니다.
     */
    return Object.keys(cartItems).flatMap((id) => {
      const item = cartItems[id];
      const product = products.find(p => p.id === parseInt(id));
      if (!product) return [];
      return [{
        id: item.id.toString(),
        image: product.image,
        title: product.title,
        count: item.count,
        price: item.count * product.price,
      }];
    });
  },
});