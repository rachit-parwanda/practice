import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext, useMemo } from "react";
import { CartContext } from "../../context/CartContext";
import { Typography } from "@rippling/ui";
import { Colors } from "@rippling/ui/Constants";

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
      <Typography.H3
        onClick={showProducts}
        className="home"
        color={Colors.EGG_SHELL_DARK}
      >
        Products
      </Typography.H3>
      <Typography.H4
        onClick={showCart}
        className="cart"
        color={Colors.EGG_SHELL_DARK}
      >
        Cart: {cartCount}
      </Typography.H4>
    </div>
  );
};

export default Navbar;
