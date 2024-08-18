import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";

const Gallery = ({ product }) => {
  const mainRef = useRef();
  const handleThumbs = (id) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };
  return (
    <div dir="ltr" className="padding">
      <Splide
        options={{
          type: "loop",
          rewind: true,
        }}
        ref={mainRef}
      >
        {product.covers.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <img src={item} alt={`banner ${index}`} className="size-full" />
            </SplideSlide>
          );
        })}
      </Splide>
      <Splide
        className="mt-4"
        options={{
          type: "loop",
          perPage: 4,
          gap: "1em",
          rewind: true,
          arrows: false,
          pagination: false,
        }}
      >
        {product.covers.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <img
                onClick={() => handleThumbs(index)}
                src={item}
                alt={`banner ${index}`}
                className="size-full"
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Gallery;
