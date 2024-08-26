import { Hero, Articles, Carousel, Category, Slider } from "../Portal";
import { articles, categories, hero, homeSlide } from "../../data/constans";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero thing={hero.home} />
      <Category things={categories} />
      <section className="overflow-hidden">
        <Link to={hero.snail.path} className="relative group">
          <img
            src={hero.snail.cover}
            alt="Hero Image"
            className="center-obj w-full max-h-screen bg-slate-900 transition-all group-hover:scale-125"
          />
          <div className="absolute size-full top-0 text-center flex-fullcenter mix-blend-difference">
            <h2 className="title-sup max-w-[500px]">{hero.snail.title}</h2>
          </div>
        </Link>
      </section>
      <Carousel title="تازه ترین کالاها" things={products} />
      <Slider things={homeSlide} />
      <Carousel title="محبوب ترین کالاها" things={products} />
      <Articles thing={articles.home} />
    </>
  );
};

export default Home;
