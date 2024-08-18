import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Details, Familiar, Gallery, Over } from "../Portal";

const Product = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const theProduct = products.find((e) => e && e.title === path);
  return (
    <>
      <section className="flex">
        <div className="lg:w-1/2">
          <Gallery product={theProduct} />
        </div>
        <div className="lg:w-1/2">
          <Over product={theProduct} />
        </div>
      </section>
      <Details product={theProduct} />
      <Familiar product={theProduct} />
    </>
  );
};

export default Product;
