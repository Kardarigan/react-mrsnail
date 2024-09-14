import { useParams } from "react-router-dom";
import { products } from "../../data/products";
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
  const theProduct = products.find((e) => e && e.title === path);

  const familiar = products.filter(
    (item) => item.category === theProduct.category
  );
  const sameBrand = products.filter((item) => item.brand === theProduct.brand);

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
      <Carousel things={familiar} title="کالا های مشابه" />
      <Carousel
        things={sameBrand}
        title={`کالا های دیگر ${theProduct.brand}`}
        dark
      />
      <Articles thing={articles.product} />
    </>
  );
};

export default Product;
