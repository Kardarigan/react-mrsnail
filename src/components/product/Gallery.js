import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Gallery = ({ product }) => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  useEffect(() => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      mainSliderRef.current.sync(thumbnailSliderRef.current.splide);
    }
  }, []);

  return (
    <div dir="ltr">
      <Splide
        ref={mainSliderRef}
        id="mainSlider"
        options={{
          type: "loop",
          rewind: true,
          pagination: false,
        }}
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
        ref={thumbnailSliderRef}
        id="thumgnailSlider"
        className="mt-4"
        options={{
          type: "loop",
          gap: "1em",
          rewind: true,
          arrows: false,
          pagination: false,
          isNavigation: true,
          focus: "center",
          fixedWidth: 100,
          fixedHeight: 100,
          cover: true,
        }}
      >
        {product.covers.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <img src={item} alt={`banner ${index}`} className="size-full" />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Gallery;
