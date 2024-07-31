import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "../Portal";
import "@splidejs/react-splide/css";

const Carousel = ({ title, products }) => {
  return (
    <section className="paddin bg-slate-100 lg:flex items-center py-5">
      <div className="flex-fullcenter w-full text-center px-8 max-lg:py-5">
        <h2 className="title">{title}</h2>
      </div>
      <div dir="ltr">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            perPage: 4,
            perMove: 1,
            arrows: false,
            pagination: false,
            gap: "2em",
            updateOnMove: true,
            breakpoints: {
              1640: {
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
