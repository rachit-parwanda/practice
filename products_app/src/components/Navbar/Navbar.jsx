import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const history = useHistory();

  const showCart = () => {
    history.push("/cart");
  };

  const showProducts = () => {
    history.push("/products");
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
