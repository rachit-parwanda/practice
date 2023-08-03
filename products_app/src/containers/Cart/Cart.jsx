import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem";
import "./Cart.css";

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

  return (
    <div className="Cart">
      <h2>Cart Total: ${cartTotal.toFixed(2)}</h2>
      <div className="cart-items">
        {Object.entries(cartData).map(([id, { product, count }]) => {
          if (count === 0) {
            return null;
          }

          return (
            <CartItem
              key={id}
              product={product}
              count={count}
              onAddProduct={addProduct}
              onRemoveProduct={removeProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
