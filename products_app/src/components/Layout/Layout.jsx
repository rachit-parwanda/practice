import Navbar from "../../containers/Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Navbar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
