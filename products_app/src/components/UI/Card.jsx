import "./Card.css";

const Card = ({ className, children }) => {
  return <div className={`Card ${className}`}>{children}</div>;
};

export default Card;
