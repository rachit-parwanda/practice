import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const { image, category, title, description, price } = products.find(
    (product) => product.id === +id
  ); // id is number in this case, usually it will be a string

  return (
    <div className="ProductDetails">
      <div className="top">
        <img src={image} alt={category} />
      </div>
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="price">${price}</div>
        <hr />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
