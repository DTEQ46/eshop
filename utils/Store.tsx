import Cookies from 'js-cookie';
import React, { createContext, useReducer, ReactNode } from 'react';

export enum ActionKindPayCart {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}
export enum ActionKindPayAny {
  SAVE_SHIPPING_ADDRESS = 'SAVE_SHIPPING_ADDRESS',
  SAVE_PAYMENT_METHOD = 'SAVE_PAYMENT_METHOD',
  SAVE_SHIPPING_ADDRESS_MAP_LOCATION = 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION',
  USER_LOGIN = 'USER_LOGIN',
}
export enum ActionKindNopay {
  DARK_MODE_ON = 'DARK_MODE_ON',
  DARK_MODE_OFF = 'DARK_MODE_OFF',
  USER_LOGOUT = 'USER_LOGOUT',
  CART_CLEAR = 'CART_CLEAR',
}
export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  category: string;
  image_url: string;
  isFeatured: boolean;
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  quantity: number;
  description: string;
}

export interface Ship {
  fullName: string;
  address: string;
  city: string;
  postalCode: number;
  country: string;
  location: string;
}

export interface Reg {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface Log {
  email: string;
  password: string;
}
export interface State {
  darkMode: boolean;
  cart: {
    cartItems: IProduct[];
    shippingAddress: any;
    paymentMethod: any;
  };
  userInfo: any;
}
export interface MyContext {
  state: State;
  dispatch: React.Dispatch<Action>;
}

type ActionPayAny = {
  type: ActionKindPayAny;
  payload: any;
};
type ActionPayCart = {
  type: ActionKindPayCart;
  payload: IProduct;
};
type ActionNopay = {
  type: ActionKindNopay;
};
type Action = ActionPayCart | ActionNopay | ActionPayAny;
export const initialState: State = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
      ? Cookies.get('shippingAddress')
      : { location: {} },
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
  },
  userInfo: Cookies.get('userInfo') ? Cookies.get('userInfo') : null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKindNopay.DARK_MODE_ON:
      return { ...state, darkMode: true };
    case ActionKindNopay.DARK_MODE_OFF:
      return { ...state, darkMode: false };
    case ActionKindPayCart.CART_ADD_ITEM: {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case ActionKindPayCart.CART_REMOVE_ITEM: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case ActionKindPayAny.USER_LOGIN:
      return { ...state, userInfo: action.payload };
    case ActionKindNopay.USER_LOGOUT:
      return {
        ...state,
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      };
    case ActionKindPayAny.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case ActionKindPayAny.SAVE_SHIPPING_ADDRESS_MAP_LOCATION:
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            location: action.payload,
          },
        },
      };

    case ActionKindPayAny.SAVE_PAYMENT_METHOD:
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    case ActionKindNopay.CART_CLEAR:
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    default:
      return state;
  }
};

type Props = {
  children?: ReactNode;
};

export const Store = createContext<MyContext>({
  state: initialState,
  dispatch: () => {},
});

export function StoreProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
