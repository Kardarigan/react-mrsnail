import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ things }) => {
  const length = things.length;
  return (
    <section id="firstSection">
      <div className="pagecenter px-5 py-10">
        <div className="flex justify-center flex-wrap">
          {things.map((item, index) => {
            const even = index % 2;
            return (
              <div
                key={index}
                className={`text-center ${
                  index + 1 == length && index % 2 !== 1
                    ? ""
                    : even
                    ? "md:mt-12"
                    : "max-md:mt-12"
                } md:basis-1/6 basis-1/3`}
              >
                <Link to={item.path}>
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
