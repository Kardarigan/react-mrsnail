const Hero = ({ thing }) => {
  return (
    <section>
      <a href={thing?.path} className="relative">
        <img
          src={thing.cover}
          alt="Hero Image"
          className="center-obj w-full max-h-[82vh] min-h-[84vh] bg-slate-900"
        />
        <div className="absolute right-0 left-0 top-20 max-md:text-center m-12 md:w-[50%] text-slate-50">
          <h1 className="title-sup">{thing.title}</h1>
          <p
            className="mt-5 para"
            dangerouslySetInnerHTML={{ __html: thing.subtitle }}
          />
        </div>
      </a>
    </section>
  );
};

export default Hero;
