import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const Product = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const theProduct = products.find((e) => e && e.title == path);
  return (
    <>
      <h1>{theProduct.title}</h1>
    </>
  );
};

export default Product;
