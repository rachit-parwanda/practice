import { Navigate, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./containers/ContextProviders/AppContextProvider";
import ProductList from "./containers/Product/ProductList";
import ProductDetails from "./containers/Product/ProductDetails";
import Cart from "./containers/Cart/Cart";
import Layout from "./components/Layout/Layout";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </AppContextProvider>
    </div>
  );
};

export default App;
