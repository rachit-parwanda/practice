import { useHistory } from "react-router-dom";
import ActionButton from "../UI/ActionButton";
import Card from "../UI/Card";
import "./CartItem.css";

const CartItem = ({ product, count, onAddProduct, onRemoveProduct }) => {
  const { image, category, title, description, price } = product;
  const history = useHistory();

  const showDescription = (id) => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Card className="CartItem">
      <div className="left" onClick={() => showDescription(product.id)}>
        <img src={image} alt={category} />
      </div>
      <div className="right">
        <h3 className="title" onClick={() => showDescription(product.id)}>
          {title}
        </h3>
        <hr />
        <div className="description">{description}</div>
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

export default CartItem;
