import ProductsList from "../../components/Products/ProductsList";
import "./Products.css";

const Products = ({
  isLoading,
  errorMsg,
  products,
  cartData,
  onAddProduct,
  onRemoveProduct,
}) => {
  if (isLoading) {
    return "Loading...";
  } else if (errorMsg) {
    return errorMsg;
  } else if (!products || products.length === 0) {
    return "No products to show";
  }

  return (
    <div className="Products">
      <h2>Products List ({products.length} product(s))</h2>
      <ProductsList
        products={products}
        onAddProduct={onAddProduct}
        onRemoveProduct={onRemoveProduct}
        cartData={cartData}
      />
    </div>
  );
};

export default Products;
