import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartData } = useContext(CartContext);

  const cartCount = useMemo(
    () =>
      Object.values(cartData).reduce(
        (prevCount, currItem) => prevCount + currItem.count,
        0
      ),
    [cartData]
  );

  const showCart = () => {
    navigate("/cart");
  };

  const showProducts = () => {
    navigate("/products");
  };

  return (
    <div className="Navbar">
      <h2 onClick={showProducts} className="home">
        Products
      </h2>
      <div onClick={showCart} className="cart">
        Cart: {cartCount}
      </div>
    </div>
  );
};

export default Navbar;
