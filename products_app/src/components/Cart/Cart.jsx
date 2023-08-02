import CartItem from "./CartItem";
import "./Cart.css";
import { useMemo } from "react";

const Cart = ({ cartData, onAddProduct, onRemoveProduct }) => {
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

  return (
    <div className="Cart">
      <h2>Cart Total: ${cartTotal}</h2>
      <div className="cart-items">
        {Object.entries(cartData).map(([id, { product, count }]) => {
          return (
            <CartItem
              key={id}
              product={product}
              count={count}
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
