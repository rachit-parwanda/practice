import { useHistory } from "react-router-dom";
import ActionButton from "../UI/ActionButton";
import "./ProductsListItem.css";
import Card from "../UI/Card";

const ProductsListItem = ({
  product,
  onAddProduct,
  onRemoveProduct,
  count,
}) => {
  const { image, category, title, description, price } = product;
  const history = useHistory();

  const showDescription = (id) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Card className="ProductListItem">
      <div className="card-header" onClick={() => showDescription(product.id)}>
        <img src={image} alt={category} />
      </div>
      <div className="card-body">
        <p className="title" onClick={() => showDescription(product.id)}>
          {title}
        </p>
        <div className="description" title={description}>
          {description}
        </div>
        <div className="actions">
          <div className="price">${price}</div>
          <ActionButton
            onAddProduct={onAddProduct}
            onRemoveProduct={onRemoveProduct}
            product={product}
            count={count}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductsListItem;
