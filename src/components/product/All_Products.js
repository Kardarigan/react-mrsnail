import { hero, sorts } from "../../data/constans";
import { categories, products } from "../../data/products";
import { Carousel, Hero, Overview } from "../Portal";

const All_Products = () => {
  return (
    <>
      <Hero thing={hero.products} />
      <Carousel title="پر فروش ترین" things={products} id="firstSection" />
      <Carousel title="تازه ترین کالاها" things={products} dark />
      <Overview
        things={products}
        sortOptions={sorts.products}
        filters={categories}
      />
    </>
  );
};

export default All_Products;
