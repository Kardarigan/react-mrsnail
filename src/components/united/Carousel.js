import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "../Portal";
import "@splidejs/react-splide/css";
import { Loaded_Animation } from "../united/Loaded_Animation";

const Carousel = ({
  title,
  things,
  type = "product",
  dark = false,
  id = null,
}) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section
      id={id}
      className={`paddin ${
        dark ? "bg-slate-800" : "bg-slate-100"
      } items-center px-5 padding-y`}
    >
      <div className="flex-fullcenter title-sm w-full text-center px-8 pt-1 pb-5 max-lg:py-5">
        <h5
          ref={ref}
          className={`mark ${
            dark ? "mark-light" : "mark-dark"
          } px-8 py-5 ${className}`}
        >
          {title}
        </h5>
      </div>
      <div dir="ltr">
        <Splide
          aria-label="Tesla Hero Slider"
          options={{
            perMove: 1,
            type: "loop",
            arrows: false,
            autoplay: true,
            pagination: false,
            gap: "2em",
            omitEnd: true,
            perPage: 6,
            breakpoints: {
              1580: {
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
          {things.map((item, index) => {
            return (
              <SplideSlide key={index} data-splide-interval="2000">
                <Card thing={item} type={type} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;
