import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = ({ cartCount, children }) => {
  return (
    <div className="Layout">
      <Navbar cartCount={cartCount} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
