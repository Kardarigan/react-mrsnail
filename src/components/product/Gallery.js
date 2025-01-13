import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Gallery = ({ product }) => {
  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);
  const [lightBoxSource, setLightBoxSource] = useState(null);

  const closeLightBox = () => {
    setLightBoxSource(null);
  };

  useEffect(() => {
    if (mainSliderRef.current && thumbnailSliderRef.current) {
      mainSliderRef.current.sync(thumbnailSliderRef.current.splide);
    }
  }, [mainSliderRef, thumbnailSliderRef]);

  return (
    <>
      <div dir="ltr">
        <Splide
          ref={mainSliderRef}
          id="mainSlider"
          options={{
            type: "loop",
            rewind: true,
            pagination: false,
            height: 600,
          }}
        >
          {product.covers.map((item, index) => (
            <SplideSlide key={index}>
              <img
                src={item}
                alt={`banner ${index}`}
                className="size-full center-obj cursor-pointer select-none"
                onClick={() => setLightBoxSource(item)}
              />
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

      <div
        className={`fixed size-full top-0 left-0 z-50 flex-fullcenter displayTrans ${
          lightBoxSource ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="size-full bg-slate-900 bg-opacity-80"
          onClick={closeLightBox}
        ></div>
        <img
          src={lightBoxSource}
          alt="Product Image Lightbox"
          className="max-h-full max-w-full object-contain absolute"
        />
        <button
          className="button button-light p-0 absolute top-5 right-5 size-12"
          onClick={closeLightBox}
        >
          <i className="fas fa-xmark title-sm " />
        </button>
      </div>
    </>
  );
};

export default Gallery;
