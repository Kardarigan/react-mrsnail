import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return <Link to={product.path}></Link>;
};

export default Card;
