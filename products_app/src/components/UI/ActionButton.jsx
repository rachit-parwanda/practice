import { useEffect, useState } from "react";
import "./ActionButton.css";

const ActionButton = ({ onAddProduct, onRemoveProduct, product, count }) => {
  const [showMultiBtn, setShowMultiBtn] = useState(false);

  useEffect(() => {
    if (count && count > 0) {
      setShowMultiBtn(true);
    } else if (!count || count === 0) {
      setShowMultiBtn(false);
    }
  }, [count]);

  return showMultiBtn ? (
    <div>
      <button
        className="cart-btn-multi"
        onClick={() => onRemoveProduct(product)}
      >
        -
      </button>
      <span className="item-count">{count}</span>
      <button className="cart-btn-multi" onClick={() => onAddProduct(product)}>
        +
      </button>
    </div>
  ) : (
    <button className="cart-btn" onClick={() => onAddProduct(product)}>
      Add to Cart
    </button>
  );
};

export default ActionButton;
