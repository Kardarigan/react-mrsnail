import { Link } from "react-router-dom";

const Category = ({ things }) => {
  return (
    <section id="firstSection">
      <div className="pagecenter px-5 py-10">
        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-12 gap-5">
          {things.map((item, index) => {
            const even = index % 2;
            return (
              <Link
                to={item.path}
                key={index}
                className={`text-center ${even ? "md:mt-12" : "max-md:mt-12"}`}
              >
                <div className="rounded-full overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.alt}
                    className="w-52 p-5"
                    style={{
                      backgroundColor: item.bgColor,
                    }}
                  />
                </div>
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
