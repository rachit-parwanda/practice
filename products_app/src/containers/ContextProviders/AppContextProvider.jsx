import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useFetch } from "../../hooks/useFetch";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";

export const AppContextProvider = ({ children }) => {
  const {
    data: { cartData },
    actions: { addProduct, removeProduct },
  } = useCart();

  const cartCtxValue = { cartData, addProduct, removeProduct };

  const {
    data: { data: products },
    state: { isLoading, errorMsg },
    actions: { fetchData },
  } = useFetch();

  const productsCtxValue = { products, isLoading, errorMsg };

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, [fetchData]);

  return (
    <CartContext.Provider value={cartCtxValue}>
      <ProductsContext.Provider value={productsCtxValue}>
        {children}
      </ProductsContext.Provider>
    </CartContext.Provider>
  );
};
