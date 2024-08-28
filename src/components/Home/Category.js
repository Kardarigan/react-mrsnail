import { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ things }) => {
  const basis = "md:basis-1/" + (things.length + 0);
  return (
    <section id="firstSection">
      <div className="pagecenter px-5 py-10">
        <div className="flex justify-center flex-wrap">
          {things.map((item, index) => {
            const even = index % 2;
            const length = things.length;
            return (
              <Link
                to={item.path}
                key={index}
                className={`text-center ${
                  index + 1 == length && index % 2 !== 1
                    ? ""
                    : even
                    ? "md:mt-12"
                    : "max-md:mt-12"
                } ${basis} basis-1/3`}
              >
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
                  <h5 className="para font-extrabold leading-5 mt-1">
                    {item.label}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
