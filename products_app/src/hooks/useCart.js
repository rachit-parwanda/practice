import { useState } from "react";

export const useCart = () => {
  const [cartData, setCartData] = useState({}); // {id: {product: product, count}}

  const addProduct = (product) => {
    if (cartData[product.id]) {
      setCartData((prevCartData) => {
        const newCartItems = { ...prevCartData };
        const newObj = { ...prevCartData[product.id] };
        newObj.count++;
        newCartItems[product.id] = newObj;
        return newCartItems;
      });
    } else {
      setCartData((prevCartData) => {
        const newCartItems = { ...prevCartData };
        newCartItems[product.id] = { product, count: 1 };
        return newCartItems;
      });
    }
  };

  const removeProduct = (product) => {
    setCartData((prevCartData) => {
      const newCartItems = { ...prevCartData };
      const newObj = { ...prevCartData[product.id] };
      newObj.count--;
      newCartItems[product.id] = newObj;
      return newCartItems;
    });
  };

  return {
    data: {
      cartData,
    },
    state: {},
    actions: {
      addProduct,
      removeProduct,
    },
  };
};
