import { useNavigate } from "react-router-dom";
import ActionButton from "../UI/ActionButton";
// import Card from "../UI/Card";
import { Atoms, Card, Typography } from "@rippling/ui";
import "./CartItem.css";

const CartItem = ({ product, count, onAddProduct, onRemoveProduct }) => {
  const navigate = useNavigate();

  const { id, image, category, title, description, price } = product;

  const showDescription = (id) => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="CartItem">
      <Card.Layout padding={0}>
        <div className="content">
          <div className="left" onClick={() => showDescription(id)}>
            <Atoms.Image image={image} alt={category} height={280} />
          </div>
          <div className="right">
            <div className="title" onClick={() => showDescription(id)}>
              <Typography.H5 align={Typography.ALIGNMENTS.JUSTIFY}>
                {title}
              </Typography.H5>
            </div>
            <hr />
            <div className="description">
              <Typography.Body1 align={Typography.ALIGNMENTS.JUSTIFY}>
                {description}
              </Typography.Body1>
            </div>
            <div className="actions">
              <Typography.H5>${price}</Typography.H5>
              <ActionButton
                onAddProduct={() => onAddProduct(product)}
                onRemoveProduct={() => onRemoveProduct(product)}
                count={count}
                showMulti={count && count > 0 ? true : false}
              />
            </div>
          </div>
        </div>
      </Card.Layout>
    </div>
  );
  // return (
  //   <Card className="CartItem">
  //     <div className="left" onClick={() => showDescription(id)}>
  //       <img src={image} alt={category} />
  //     </div>
  //     <div className="right">
  //       <h3 className="title" onClick={() => showDescription(id)}>
  //         {title}
  //       </h3>
  //       <hr />
  //       <div className="description">{description}</div>
  //       <div className="actions">
  //         <div className="price">${price}</div>
  //         <ActionButton
  //           onAddProduct={() => onAddProduct(product)}
  //           onRemoveProduct={() => onRemoveProduct(product)}
  //           count={count}
  //         />
  //       </div>
  //     </div>
  //   </Card>
  // );
};

export default CartItem;
