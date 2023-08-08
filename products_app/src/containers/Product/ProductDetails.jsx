import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import "./ProductDetails.css";
import { Atoms, Typography } from "@rippling/ui";
import ConditionalRenderer from "../../components/Utils/ConditionalRenderer";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, isLoading, errorMsg } = useContext(ProductsContext);

  let image, category, title, description, price;
  if (products) {
    ({ image, category, title, description, price } = products?.find(
      (product) => product.id === +id
    )); // id is number in this case, usually it will be a string
  }

  return (
    <ConditionalRenderer
      isLoading={isLoading}
      errorMsg={errorMsg}
      noDataState={!products || products.length === 0}
    >
      <div className="ProductDetails">
        <div className="top">
          <Atoms.Image image={image} alt={category} height={320} />
        </div>
        <div className="bottom">
          <div className="title">
            <Typography.H3 align={Typography.ALIGNMENTS.CENTER}>
              {title}
            </Typography.H3>
          </div>
          <Typography.H4>${price}</Typography.H4>
          <hr />
          <div className="description">
            <Typography.Body1 align={Typography.ALIGNMENTS.JUSTIFY}>
              {description}
            </Typography.Body1>
          </div>
        </div>
      </div>
    </ConditionalRenderer>
  );
  // return (
  //   <div className="ProductDetails">
  //     <div className="top">
  //       <img src={image} alt={category} />
  //     </div>
  //     <div className="bottom">
  //       <div className="title">{title}</div>
  //       <div className="price">${price}</div>
  //       <hr />
  //       <div className="description">{description}</div>
  //     </div>
  //   </div>
  // );
};

export default ProductDetails;
