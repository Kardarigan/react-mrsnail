import { articles, hero } from "../../data/constans";
import { categories, products, specials } from "../../data/snails";
import { Articles, Carousel, Category, Hero, Slider } from "../Portal";

const Snail = () => {
  return (
    <>
      <Hero thing={hero.snailHero} />
      <Category things={categories} />
      <Slider things={specials} />
      <Carousel things={products} title="پرطرفدار ترین ها" />
      <Carousel things={products} title="کالا های حلزونی" dark />
      <Articles thing={articles.snail} />
    </>
  );
};

export default Snail;
