import Hero from "../asset/images/20240428_045027.jpg";
import { Category } from "../components/Portal";

const Home = () => {
  return (
    <>
      <section className="p-5">
        <a href="/" className="relative">
          <img
            src={Hero}
            alt="Hero Image"
            className="center-obj w-full max-h-[90vh]"
          />
          <div className="absolute right-0 top-20 m-12 max-w-[550px] text-yellow-50">
            <h2 className="title-sup">فکر میکنم حلزونت از ما خوشش بیاد!</h2>
            <p className="mt-5 max-md:text-xs">
              برای مشاهده ی خدمات حلوزنی آماده ای؟ اگه آره کلیک کن تا شروع کنیم.
            </p>
          </div>
        </a>
      </section>
      <Category />
    </>
  );
};

export default Home;
