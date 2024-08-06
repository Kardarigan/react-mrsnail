import React from "react";
import { categories } from "../../data/constans";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section id="firstSection">
      <div className="pagecenter p-5">
        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-12 gap-5">
          {categories.map((item, index) => {
            return (
              <Link to={item.path} key={index} className="text-center">
                <img
                  src={item.cover}
                  alt={item.alt}
                  className="rounded-full w-52"
                  style={{
                    backgroundColor: item.bgColor,
                  }}
                />
                <h5 className="para font-extrabold leading-5 mt-1">
                  {item.label}
                </h5>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
