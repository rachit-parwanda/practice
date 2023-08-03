import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

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
