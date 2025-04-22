import { Hero, Carousel, Category, Infobox } from "../Portal";
import { categories, hero, infoValue } from "../../data/constans";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero thing={hero.home} />
      <Category things={categories} />
      <section className="overflow-hidden">
        <Link to={hero.snail.path} className="relative group flex">
          <img
            src={hero.snail.cover}
            alt="Hero Image"
            className="center-obj w-full max-h-screen bg-slate-900 transition-all duration-1000 group-hover:scale-125"
          />
          <div className="absolute size-full top-0 text-center flex-fullcenter text-slate-50 mix-blend-difference">
            <h2 className="title-sup max-w-[35rem] drop-shadow">
              {hero.snail.title}
            </h2>
          </div>
        </Link>
      </section>
      <Carousel title="تازه ترین کالاها" things={products} />
      <Infobox title="ارزش های ما" things={infoValue} />
      <Carousel title="محبوب ترین کالاها" things={products} dark />
    </>
  );
};

export default Home;
