import { createContext } from "react";

export const CartContext = createContext({
  cartData: {},
  addProduct: () => {},
  removeProduct: () => {},
});
