import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Atoms, Card, Typography } from "@rippling/ui";
import ActionButton from "../../components/UI/ActionButton";
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
    <div className="ProductListItem">
      <Card.Layout padding={0}>
        <div className="card-header" onClick={() => showDescription(id)}>
          <Atoms.Image image={image} alt={category} height={180} />
        </div>
        <div className="card-body">
          <div
            className="title"
            onClick={() => showDescription(id)}
            title={title}
          >
            <Typography.H6 align={Typography.ALIGNMENTS.JUSTIFY}>
              {title}
            </Typography.H6>
          </div>
          <div className="description" title={description}>
            <Typography.Body1 align={Typography.ALIGNMENTS.JUSTIFY}>
              {description}
            </Typography.Body1>
          </div>
          <div className="actions">
            <Typography.H5>${price}</Typography.H5>
            <ActionButton
              onAddProduct={() => addProduct(product)}
              onRemoveProduct={() => removeProduct(product)}
              count={count}
            />
          </div>
        </div>
      </Card.Layout>
    </div>
  );

  // return (
  //   <Card className="ProductListItem">
  //     <div className="card-header" onClick={() => showDescription(id)}>
  //       <img src={image} alt={category} />
  //     </div>
  //     <div className="card-body">
  //       <p className="title" onClick={() => showDescription(id)}>
  //         {title}
  //       </p>
  //       <div className="description" title={description}>
  //         {description}
  //       </div>
  //       <div className="actions">
  //         <div className="price">${price}</div>
  //         <ActionButton
  //           onAddProduct={() => addProduct(product)}
  //           onRemoveProduct={() => removeProduct(product)}
  //           count={count}
  //         />
  //       </div>
  //     </div>
  //   </Card>
  // );
};

export default ProductListItem;
