import { useState } from "react";
import "./ProductsListItem.css";

const ProductsListItem = ({ product, onAddItem, onRemoveItem, cartItems }) => {
  const [showMultiBtn, setShowMultiBtn] = useState(false);
  const { image, category, title, description, price } = product;

  if (
    cartItems[product.id] &&
    cartItems[product.id].count > 0 &&
    !showMultiBtn
  ) {
    setShowMultiBtn(true);
  } else if (
    (!cartItems[product.id] || cartItems[product.id].count === 0) &&
    showMultiBtn
  ) {
    setShowMultiBtn(false);
  }

  const actionButton = (
    <button className="cart-btn" onClick={() => onAddItem(product)}>
      Add to Cart
    </button>
  );

  const multiButton = (
    <div>
      <button className="cart-btn-multi" onClick={() => onRemoveItem(product)}>
        -
      </button>
      <span className="item-count">{cartItems[product.id]?.count}</span>
      <button className="cart-btn-multi" onClick={() => onAddItem(product)}>
        +
      </button>
    </div>
  );

  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={category} />
      </div>
      <div className="card-body">
        <p className="title">{title}</p>
        <div className="description" title={description}>
          {description}
        </div>
        <div className="actions">
          <div className="price">${price}</div>
          {showMultiBtn ? multiButton : actionButton}
        </div>
      </div>
    </div>
  );
};

export default ProductsListItem;
