import React from "react";

const Hero = ({ thing }) => {
  return (
    <section>
      <a href={thing?.path} className="relative">
        <img
          src={thing.cover}
          alt="Hero Image"
          className="center-obj w-full max-h-[80vh] bg-slate-900"
        />
        <div className="absolute right-0 top-20 m-12 max-w-[550px] text-yellow-50">
          <h2 className="title-sup">{thing.title}</h2>
          <p
            className="mt-5 max-md:text-xs"
            dangerouslySetInnerHTML={{ __html: thing.subtitle }}
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
