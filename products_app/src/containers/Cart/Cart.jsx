import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem";
import "./Cart.css";
import { DraggableList, Typography } from "@rippling/ui";

const Cart = () => {
  const { cartData, addProduct, removeProduct } = useContext(CartContext);

  const cartTotal = useMemo(
    () =>
      Object.values(cartData).reduce(
        (prevTotal, { product, count }) => prevTotal + product.price * count,
        0
      ),
    [cartData]
  );

  if (Object.keys(cartData).length === 0) {
    return "Nothing added to cart yet...";
  }

  return cartTotal === 0 ? (
    "Nothing added to cart yet..."
  ) : (
    <>
      <Typography.H3>Cart Total: ${cartTotal.toFixed(2)}</Typography.H3>
      <DraggableList
        isDragDisabled
        list={Object.entries(cartData).filter(
          ([_, { __, count }]) => count !== 0
        )}
        renderer={([id, { product, count }], _) => (
          <CartItem
            key={id}
            product={product}
            count={count}
            onAddProduct={addProduct}
            onRemoveProduct={removeProduct}
          />
        )}
      />
    </>
  );
  // return (
  //   <div className="Cart">
  //     <h2>Cart Total: ${cartTotal.toFixed(2)}</h2>
  //     <div className="cart-items">
  //       {Object.entries(cartData).map(([id, { product, count }]) => {
  //         if (count === 0) {
  //           return null;
  //         }

  //         return (
  //           <CartItem
  //             key={id}
  //             product={product}
  //             count={count}
  //             onAddProduct={addProduct}
  //             onRemoveProduct={removeProduct}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};

export default Cart;
