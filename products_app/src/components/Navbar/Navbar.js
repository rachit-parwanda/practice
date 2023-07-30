import "./Navbar.css";

const Navbar = ({ itemsCount }) => {
  return (
    <div className="Navbar">
      <h2>Products</h2>
      <div>Cart: {itemsCount}</div>
    </div>
  );
};

export default Navbar;
