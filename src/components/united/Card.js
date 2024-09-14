import { Link } from "react-router-dom";

const Card = ({ thing, type = "product" }) => {
  const path = "/" + type + "/" + thing.title.split(" ").join("-");

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
          <img
            src={type === "blog" ? thing.cover : thing.covers[0]}
            alt={thing.title}
            className="group-hover:scale-125 transition-all center-obj w-full"
          />
          <h5 className="para-sm mark mark-dark absolute bottom-0 left-0">
            {thing.category}
          </h5>
        </div>
        {type === "product" ? (
          <div className="text-slate-50 px-3 py-2 text-right">
            <h2 className="line-clamp-2 md:text-lg text-xl">{thing.title}</h2>
            <hr className="my-2 opacity-30" />
            <div className="flex-seperate para">
              <h6 className="font-thin">{thing.brand}</h6>
              <h5 className="whitespace-nowrap flex justify-end items-center para">
                <span className="para-lil me-1 font-extralight">تومان</span>
                {thing.price}
              </h5>
            </div>
          </div>
        ) : (
          <div className="text-slate-50 px-3 pt-2 para-lil text-right">
            <h5 className="title-sm truncate ">{thing.title}</h5>
            <p className="line-clamp-2 text-ellipsis my-2 transition-all text-slate-400 group-hover:text-slate-200">
              {thing.article[0].paragraph}
            </p>
            <div className="flex-seperate">
              <span className="mark mark-light font-extrabold">
                {thing.category}
              </span>
              <span>{thing.date}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
