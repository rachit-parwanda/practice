import "./ProductsList.css";
import ProductsListItem from "./ProductsListItem";

const ProductsList = ({
  products,
  onAddProduct,
  onRemoveProduct,
  cartData,
}) => {
  return (
    <div className="list">
      {products.map((product) => {
        let count = cartData[product.id]?.count;
        if (!count) {
          count = 0;
        }

        return (
          <ProductsListItem
            key={product.id}
            product={product}
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
