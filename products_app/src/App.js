import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import ProductsList from "./components/Products/ProductsList";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState({}); // {id: {item: product, count}}
  const {
    data: { data: products },
    state: { isLoading, error },
    actions: { fetchData },
  } = useFetch();

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, [fetchData]);

  const totalCartItems = Object.values(cartItems).reduce(
    (prevCount, currVal) => prevCount + currVal.count,
    0
  );

  const addItemHandler = (item) => {
    if (cartItems[item.id]) {
      setCartItems((prevCartItems) => {
        const newCartItems = { ...prevCartItems };
        const newObj = { ...prevCartItems[item.id] };
        newObj.count++;
        newCartItems[item.id] = newObj;
        return newCartItems;
      });
    } else {
      setCartItems((prevCartItems) => {
        const newCartItems = { ...prevCartItems };
        newCartItems[item.id] = { item, count: 1 };
        return newCartItems;
      });
    }
  };

  const removeItemHandler = (item) => {
    setCartItems((prevCartItems) => {
      const newCartItems = { ...prevCartItems };
      const newObj = { ...prevCartItems[item.id] };
      newObj.count--;
      newCartItems[item.id] = newObj;
      return newCartItems;
    });
  };

  return (
    <div className="App">
      <Navbar itemsCount={totalCartItems} />
      <div className="content">
        {isLoading && "Loading..."}
        {error && error}
        {products && (
          <div>
            <h3>Products List:</h3>
            <ProductsList
              products={products}
              onAddItem={addItemHandler}
              onRemoveItem={removeItemHandler}
              cartItems={cartItems}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
