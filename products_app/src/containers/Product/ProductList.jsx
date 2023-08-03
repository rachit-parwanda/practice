import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ConditionalRenderer from "../../components/Utils/ConditionalRenderer";
import ProductsListItem from "./ProductListItem";
import "./ProductList.css";

const ProductList = () => {
  const { products, isLoading, errorMsg } = useContext(ProductsContext);

  return (
    <ConditionalRenderer
      isLoading={isLoading}
      errorMsg={errorMsg}
      noDataState={!products || products.length === 0}
    >
      <div className="ProductList">
        <h2>Products List ({products?.length} product(s))</h2>
        <div className="list">
          {products?.map((product) => (
            <ProductsListItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </ConditionalRenderer>
  );
};

export default ProductList;
