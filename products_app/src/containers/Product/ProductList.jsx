import { useContext } from "react";
import { Layout, Typography } from "@rippling/ui";
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
        <Typography.H3>
          Products List ({products?.length} product(s))
        </Typography.H3>
        <Layout.Grid
          theme={Layout.Grid.THEMES.NO_CARD}
          list={products?.map((product) => {
            return {
              label: product.category,
              renderer: ProductsListItem,
              props: {
                product,
              },
            };
          })}
        />
      </div>
    </ConditionalRenderer>
  );
  // return (
  //   <ConditionalRenderer
  //     isLoading={isLoading}
  //     errorMsg={errorMsg}
  //     noDataState={!products || products.length === 0}
  //   >
  //     <div className="ProductList">
  //       <h2>Products List ({products?.length} product(s))</h2>
  //       <div className="list">
  //         {products?.map((product) => (
  //           <ProductsListItem key={product.id} product={product} />
  //         ))}
  //       </div>
  //     </div>
  //   </ConditionalRenderer>
  // );
};

export default ProductList;
