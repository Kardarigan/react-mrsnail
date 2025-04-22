import { articles, hero } from "../../data/constans";
import { categories, products, specials } from "../../data/snails";
import {
  Articles,
  Breadcrumb,
  Carousel,
  Category,
  Hero,
  Slider,
} from "../Portal";

const Snail = () => {
  return (
    <>
      <Breadcrumb />
      <Hero thing={hero.snailHero} />
      <Category things={categories} />
      <Slider things={specials} />
      <Carousel things={products} title="پرطرفدار ترین ها" />
      <Carousel things={products} title="محصولاتی حلزونی" dark />
    </>
  );
};

export default Snail;
