import { useEffect, useState } from "react";
import "./ActionButton.css";

const ActionButton = ({ onAddProduct, onRemoveProduct, count }) => {
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
      <button className="cart-btn-multi" onClick={onRemoveProduct}>
        -
      </button>
      <span className="item-count">{count}</span>
      <button className="cart-btn-multi" onClick={onAddProduct}>
        +
      </button>
    </div>
  ) : (
    <button className="cart-btn" onClick={onAddProduct}>
      Add to Cart
    </button>
  );
};

export default ActionButton;
