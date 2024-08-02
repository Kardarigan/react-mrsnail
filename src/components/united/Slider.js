import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const Slider = ({ things }) => {
  return (
    <section>
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        {things.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <section
                className="size-screen padding-x bg-slate-900 center-bg"
                style={{
                  backgroundImage: "url(" + item.background + ")",
                }}
              >
                <div className="">
                  <div className="text-slate-950">
                    <h3 className="text-xl">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <div>
                    {item.buttons.map((button, index) => {
                      return (
                        <Link to={button.path} key={index}>
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
