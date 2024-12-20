import { Link } from "react-router-dom";
import { Loaded_Animation } from "../united/Loaded_Animation";

const Half = ({ thing, id = null, right = false, dark = false }) => {
  const { ref, className } = Loaded_Animation();

  return (
    <section
      ref={ref}
      className={`lg:min-h-screen ${
        dark ? "bg-slate-900  text-slate-100" : "bg-slate-50  text-slate-900"
      } flex ${right ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col-reverse`}
      id={id}
    >
      <div className="lg:w-1/3">
        <div
          className={`padding flex flex-col justify-between h-full ${className}`}
        >
          <div>
            <h2>{thing.topic}</h2>
            <h3 className="title">{thing.title}</h3>
            <p className="mt-4">{thing.describe}</p>
          </div>
          <div>
            {thing.links?.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  className={`button ${
                    index > 0 ? "button-light" : "button-dark"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 relative">
        {thing.cover.endsWith(".mp4") || thing.cover.endsWith(".webm") ? (
          <video autoPlay muted loop className="bg-fullobject size-full">
            <source
              src={thing.cover}
              type={`video/${thing.cover.split(".").pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={thing.cover}
            alt={thing.title}
            className="size-full bg-fullobject"
          />
        )}
      </div>
    </section>
  );
};

export default Half;
