import { Link } from "react-router-dom";
import { Loaded_Animation } from "../united/Loaded_Animation";

const Category = ({ things }) => {
  const length = things.length;
  const { ref, className } = Loaded_Animation();

  return (
    <section id="firstSection">
      <div className="pagecenter px-5 py-10">
        <div ref={ref} className="flex justify-center flex-wrap">
          {things.map((item, index) => {
            const even = index % 2;
            const path = "/" + item.label.split("-").join(" ");

            return (
              <div
                key={index}
                className={`text-center ${
                  index + 1 == length && index % 2 !== 1
                    ? ""
                    : even
                    ? "md:mt-12"
                    : "max-md:mt-12"
                } ${
                  length === 7 ? "" : ""
                } md:basis-[14%] basis-1/3 ${className}`}
              >
                <Link to={path}>
                  <div className="p-3">
                    <div className="rounded-full overflow-hidden">
                      <img
                        src={item.cover}
                        alt={item.alt}
                        className="p-5"
                        style={{
                          backgroundColor: item.bgColor,
                        }}
                      />
                    </div>
                    <h5 className="title-sm font-extrabold leading-5 mt-1">
                      {item.label}
                    </h5>
                    <h6 className="para-sm mt-1">{item.englishLabel}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
