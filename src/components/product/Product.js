import { useParams } from "react-router-dom";
import { products as snailProducts } from "../../data/snails";
import { products as mainProducts } from "../../data/products";
import {
  Articles,
  Breadcrumb,
  Carousel,
  Details,
  Gallery,
  Over,
} from "../Portal";
import { articles } from "../../data/constans";

const Product = () => {
  const { product } = useParams();
  const path = product.split("-").join(" ");
  const combinedProducts = [...snailProducts, ...mainProducts];
  const theProduct = combinedProducts.find((e) => e && e.title === path);

  const familiar = combinedProducts.filter(
    (item) => item.category === theProduct.category
  );
  const sameBrand = combinedProducts.filter(
    (item) => item.brand === theProduct.brand
  );

  return (
    <>
      <Breadcrumb />
      <section className="lg:flex gap-12 padding">
        <div className="lg:w-2/5">
          <Gallery product={theProduct} />
        </div>
        <div className="lg:w-3/5">
          <Over product={theProduct} />
        </div>
      </section>
      <Details product={theProduct} />
      <Carousel things={familiar} title="محصولاتی مشابه" />
      {theProduct.brand && (
        <Carousel
          things={sameBrand}
          title={`محصولاتی دیگر ${theProduct.brand}`}
          dark
        />
      )}
      <Articles thing={articles.product} />
    </>
  );
};

export default Product;
