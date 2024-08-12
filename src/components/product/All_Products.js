import { hero } from "../../data/constans";
import { products } from "../../data/products";
import { Carousel, Hero, Overview } from "../Portal";

const All_Products = () => {
  return (
    <>
      <Hero thing={hero.products} />
      <Carousel title="پر فروش ترین" products={products} />
      <Carousel title="تازه ترین کالاها" products={products} dark />
      <Overview things={products} />
    </>
  );
};

export default All_Products;
