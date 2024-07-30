import { Splide, SplideSlide } from "@splidejs/react-splide";

const Carousel = ({ title, products }) => {
  return (
    <section>
      <Splide
        aria-label="Tesla Hero Slider"
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
        }}
      >
        {heroSlides.map((slide) => {
          return <SplideSlide></SplideSlide>;
        })}
      </Splide>
    </section>
  );
};

export default Carousel;
