import { createContext } from "react";

export const ProductsContext = createContext({
  products: [],
  isLoading: false,
  errorMsg: "",
});
