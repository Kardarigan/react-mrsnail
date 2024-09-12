import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import GLightbox from "glightbox";

const Gallery = ({ product }) => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  useEffect(() => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      mainSliderRef.current.sync(thumbnailSliderRef.current.splide);
    }
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({
      loop: true,
      openEffect: "fade",
      closeEffect: "fade",
      width: 1920,
      height: 1080,
    });
    lightbox.on("slide_changed", ({ prev, current }) => {
      if (mainSliderRef.current) {
        mainSliderRef.current.go(current.index);
      }
    });
    return () => lightbox.destroy();
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
          height: 500,
        }}
      >
        {product.covers.map((item, index) => (
          <SplideSlide key={index}>
            <a href={item} data-glightbox="type:image">
              <img
                src={item}
                alt={`banner ${index}`}
                className="size-full center-obj"
              />
            </a>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        ref={thumbnailSliderRef}
        id="thumbnailSlider"
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
        {product.covers.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item} alt={`banner ${index}`} className="size-full" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Gallery;
