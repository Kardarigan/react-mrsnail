import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ things }) => {
  const [btnTheme, setBtnTheme] = useState("light");

  return (
    <section dir="ltr">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        {things.map((item, index) => {
          const inTwo = Boolean(index % 2);
          const inThree = Boolean(index % 3);

          return (
            <SplideSlide key={index}>
              <section
                className={`size-screen flex ${
                  inTwo
                    ? "justify-center text-center"
                    : inThree
                    ? "justify-end text-end"
                    : "justify-start text-start"
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
                    className={`flex ${
                      inTwo
                        ? "justify-center"
                        : inThree
                        ? "justify-end"
                        : "justify-start"
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
