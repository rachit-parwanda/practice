import { useEffect, useMemo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useCart } from "./hooks/useCart";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Cart/Cart";
import "./App.css";
import Layout from "./components/UI/Layout";

const App = () => {
  const {
    data: { cartData },
    actions: { addProduct, removeProduct },
  } = useCart();
  const {
    data: { data: products },
    state: { isLoading, errorMsg },
    actions: { fetchData },
  } = useFetch();

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, [fetchData]);

  const cartCount = useMemo(
    () =>
      Object.values(cartData).reduce(
        (prevCount, currItem) => prevCount + currItem.count,
        0
      ),
    [cartData]
  );

  return (
    <div className="App">
      <Layout cartCount={cartCount}>
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route exact path="/products">
            <Products
              isLoading={isLoading}
              errorMsg={errorMsg}
              products={products}
              cartData={cartData}
              onAddProduct={addProduct}
              onRemoveProduct={removeProduct}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails products={products} />
          </Route>
          <Route path="/cart">
            <Cart
              cartData={cartData}
              onAddProduct={addProduct}
              onRemoveProduct={removeProduct}
            />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
