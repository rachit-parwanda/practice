// import { useEffect, useState } from "react";
import { Button, Typography } from "@rippling/ui";
import "./ActionButton.css";

const ActionButton = ({ onAddProduct, onRemoveProduct, count }) => {
  let showMultiBtn;
  if (count && count > 0) {
    showMultiBtn = true;
  } else {
    showMultiBtn = false;
  }

  return showMultiBtn ? (
    <div className="ActionButton">
      <Button onClick={onRemoveProduct} size={Button.SIZES.S}>
        -
      </Button>
      <div className="item-count">
        <Typography.H5>{count}</Typography.H5>
      </div>
      <Button onClick={onAddProduct} size={Button.SIZES.S}>
        +
      </Button>
    </div>
  ) : (
    <div className="ActionButton">
      <Button onClick={onAddProduct} size={Button.SIZES.S}>
        Add to Cart
      </Button>
    </div>
  );
  // return showMultiBtn ? (
  //   <div>
  //     <button className="cart-btn-multi" onClick={onRemoveProduct}>
  //       -
  //     </button>
  //     <span className="item-count">{count}</span>
  //     <button className="cart-btn-multi" onClick={onAddProduct}>
  //       +
  //     </button>
  //   </div>
  // ) : (
  //   <button className="cart-btn" onClick={onAddProduct}>
  //     Add to Cart
  //   </button>
  // );
};

export default ActionButton;
