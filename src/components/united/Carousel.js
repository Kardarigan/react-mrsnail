import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "../Portal";
import "@splidejs/react-splide/css";

const Carousel = ({ title, products, dark = false }) => {
  console.log(products.length);

  return (
    <section
      className={`paddin ${
        dark ? "bg-slate-800" : "bg-slate-100"
      } items-center p-5`}
    >
      <div className="flex-fullcenter title w-full text-center px-8 pt-1 pb-5 max-lg:py-5">
        <h2
          className={`${
            dark ? "bg-slate-200 text-slate-800" : "text-slate-200 bg-slate-800"
          } px-5 py-1`}
        >
          {title}
        </h2>
      </div>
      <div dir="ltr">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            perMove: 1,
            arrows: false,
            pagination: false,
            gap: "2em",
            omitEnd: true,
            breakpoints: {
              1440: {
                perPage: 4,
              },
              1024: {
                perPage: 3,
              },
              767: {
                perPage: 2,
              },
            },
          }}
        >
          {products.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <Card product={item} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;
