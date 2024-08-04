import { Link } from "react-router-dom";

const Half = ({ thing, right = false }) => {
  return (
    <section
      className={`min-h-screen bg-slate-50 flex ${
        right ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col-reverse`}
    >
      <div className="lg:w-1/3 text-slate-900">
        <div className="padding flex flex-col justify-between h-full">
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
