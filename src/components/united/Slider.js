import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ things }) => {
  const [btnTheme, setBtnTheme] = useState("light");

  return (
    <section>
      <Splide
        options={{ type: "fade", rewind: true, autoplay: true, arrows: false }}
      >
        {things.map((item, index) => {
          const even = Boolean(index % 2);

          return (
            <SplideSlide key={index}>
              <section
                className={`size-screen flex${
                  even ? " justify-center text-center" : ""
                } items-center padding-x bg-slate-900 center-bg`}
                style={{
                  backgroundImage: "url(" + item.background + ")",
                }}
              >
                <div className={`max-w-[550px] ${item.colorClass}`}>
                  <div>
                    <h3 className="title-lg">{item.title}</h3>
                    <p className="mt-3">{item.subtitle}</p>
                  </div>
                  <div
                    className={`flex${
                      even ? " justify-center" : ""
                    } max-md:flex-col gap-5 mt-5`}
                  >
                    {item.buttons.map((button, index) => {
                      return (
                        <Link
                          to={button.path}
                          key={index}
                          className={`button ${
                            index > 0 ? "button-light" : "button-dark"
                          }`}
                        >
                          {button.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Slider;
