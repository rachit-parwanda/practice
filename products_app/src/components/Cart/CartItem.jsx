import { useNavigate } from "react-router-dom";
import ActionButton from "../../containers/UI/ActionButton";
import Card from "../UI/Card";
import "./CartItem.css";

const CartItem = ({ product, count, onAddProduct, onRemoveProduct }) => {
  const navigate = useNavigate();

  const { id, image, category, title, description, price } = product;

  const showDescription = (id) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card className="CartItem">
      <div className="left" onClick={() => showDescription(id)}>
        <img src={image} alt={category} />
      </div>
      <div className="right">
        <h3 className="title" onClick={() => showDescription(id)}>
          {title}
        </h3>
        <hr />
        <div className="description">{description}</div>
        <div className="actions">
          <div className="price">${price}</div>
          <ActionButton
            onAddProduct={() => onAddProduct(product)}
            onRemoveProduct={() => onRemoveProduct(product)}
            count={count}
          />
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
