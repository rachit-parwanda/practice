import "./ProductsList.css";
import ProductsListItem from "./ProductsListItem";

const ProductsList = ({ products, onAddItem, onRemoveItem, cartItems }) => {
  const renderedProducts = products?.map((product) => (
    <ProductsListItem
      key={product.id}
      product={product}
      onAddItem={onAddItem}
      onRemoveItem={onRemoveItem}
      cartItems={cartItems}
    />
  ));

  return (
    <div className="list">
      {!renderedProducts || renderedProducts.length === 0
        ? "No product to show"
        : renderedProducts}
    </div>
  );
};

export default ProductsList;
