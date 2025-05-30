import { Link } from "react-router-dom";

import { Loaded_Animation } from "../united/Loaded_Animation";

const Middle = ({ thing, id = null, dark = false, reverse = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section
      ref={ref}
      className={`padding-x py-8  ${dark ? "bg-slate-900 text-slate-100" : ""}`}
      id={id}
    >
      <div
        className={`pagecenter flex${reverse ? " md:flex-row-reverse" : ""}`}
      >
        <div className="lg:w-2/5 w-full lg:px-10">
          <h5>{thing.topic}</h5>
          <h2
            className={`title text-center mt-1 mb-3 mark ${
              dark ? "mark-light" : "mark-dark"
            } ${className}`}
          >
            {thing.title}
          </h2>
          <p className="lg:hidden py-5">{thing.describe}</p>
          <div className="md:flex lg:flex-col md:flex-row w-full">
            {thing.links?.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <p className="w-3/5 px-10 lg:block hidden">{thing.describe}</p>
      </div>
    </section>
  );
};

export default Middle;
