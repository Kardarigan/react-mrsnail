import Hero from "../asset/images/20240428_045027.jpg";
import { Carousel, Category, Slider } from "../components/Portal";
import { homeSlide } from "../data/constans";
import { products } from "../data/products";

const Home = () => {
  return (
    <>
      <section>
        <a href="/" className="relative">
          <img
            src={Hero}
            alt="Hero Image"
            className="center-obj w-full max-h-[90vh]"
          />
          <div className="absolute right-0 top-20 m-12 max-w-[550px] text-yellow-50">
            <h2 className="title-sup">فکر میکنم حلزونت از ما خوشش بیاد!</h2>
            <p className="mt-5 max-md:text-xs">
              میخوای خدمات حلوزنیمون رو ببینی؟ اگه آره کلیک کن تا شروع کنیم.
            </p>
          </div>
        </a>
      </section>
      <Category />
      <Carousel title="تازه ترین کالاها" products={products} />
      <Slider things={homeSlide} />
    </>
  );
};

export default Home;
