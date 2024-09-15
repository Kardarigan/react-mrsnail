import { Link } from "react-router-dom";

const Card = ({ thing, type = "product" }) => {
  const persianType = type === "product" ? "محصولات" : "مقالات";
  const path = "/" + persianType + "/" + thing.title.split(" ").join("-");

  return (
    <div className="flex-fullcenter" dir="rtl">
      <div
        className={`bg-slate-900 p-2 group w-[280px] ${
          type === "product" ? "h-[380px]" : "h-[300px]"
        }`}
      >
        <div
          className={`overflow-hidden relative group ${
            type == "product" ? "h-[70%]" : "h-3/5"
          }`}
        >
          <Link to={path}>
            <img
              src={type === "blog" ? thing.cover : thing.covers[0]}
              alt={thing.title}
              className="group-hover:scale-125 transition-all center-obj w-full"
            />
          </Link>
          <h5 className="para-sm mark mark-dark absolute bottom-0 left-[-40px]  pe-12">
            <Link to={"/" + thing.category}>{thing.category}</Link>
          </h5>
        </div>
        {type === "product" ? (
          <div className="text-slate-50 px-3 py-2 text-right flex flex-col justify-between h-[30%]">
            <Link to={path}>
              <h2 className="line-clamp-2 md:text-lg text-xl">{thing.title}</h2>
            </Link>
            <div>
              <hr className="my-2 opacity-30" />
              <div className="flex-seperate para">
                <h6 className="font-thin">{thing.brand}</h6>
                <h5 className="whitespace-nowrap flex justify-end items-center para">
                  <span className="para-lil me-1 font-extralight">تومان</span>
                  {thing.price}
                </h5>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-slate-50 px-3 pt-2 para-lil text-right h-2/3">
            <Link to={path}>
              <h2 className="title-sm truncate ">{thing.title}</h2>
            </Link>
            <p className="line-clamp-2 text-ellipsis my-2 transition-all text-slate-400 group-hover:text-slate-200">
              {thing.article[0].paragraph}
            </p>
            <div className="flex-seperate">
              <h5 className="mark mark-light font-extrabold">
                {thing.category}
              </h5>
              <h5>{thing.date}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
