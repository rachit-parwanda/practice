import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Card from "../../components/UI/Card";
import ActionButton from "../UI/ActionButton";
import "./ProductListItem.css";

const ProductListItem = ({ product }) => {
  const { id, image, category, title, description, price } = product;
  const navigate = useNavigate();
  const { cartData, addProduct, removeProduct } = useContext(CartContext);

  let count = 0;
  if (cartData[id]) {
    count = cartData[id].count;
  }
  const showDescription = (id) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card className="ProductListItem">
      <div className="card-header" onClick={() => showDescription(id)}>
        <img src={image} alt={category} />
      </div>
      <div className="card-body">
        <p className="title" onClick={() => showDescription(id)}>
          {title}
        </p>
        <div className="description" title={description}>
          {description}
        </div>
        <div className="actions">
          <div className="price">${price}</div>
          <ActionButton
            onAddProduct={() => addProduct(product)}
            onRemoveProduct={() => removeProduct(product)}
            count={count}
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductListItem;
