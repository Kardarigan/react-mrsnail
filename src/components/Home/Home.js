import { Hero, Articles, Carousel, Category, Slider } from "../Portal";
import { articles, hero, homeSlide } from "../../data/constans";
import { products } from "../../data/products";

const Home = () => {
  return (
    <>
      <Hero thing={hero.home} />
      <Category />
      <Carousel title="تازه ترین کالاها" things={products} />
      <Slider things={homeSlide} />
      <Carousel title="محبوب ترین کالاها" things={products} />
      <Articles thing={articles.home} />
    </>
  );
};

export default Home;
