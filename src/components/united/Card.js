import { Link } from "react-router-dom";

const Card = ({ thing, type = "product" }) => {
  const path = "/" + type + "/" + thing.title.split(" ").join("-");

  return (
    <Link to={path} dir="rtl">
      <div className="bg-slate-900 p-2 group">
        <div className="overflow-hidden relative group">
          <img
            src={thing.cover}
            alt={thing.title}
            className="group-hover:scale-125 transition-all"
          />
        </div>
        {type == "product" ? (
          <div className="text-slate-50 px-3 py-2 title-sm text-right flex-fullcenter">
            <h5>{thing.title}</h5>
            <div className="text-center">
              <h6 className="whitespace-nowrap flex items-center">
                <span className="para-lil me-1">تومان</span>
                {thing.price}
              </h6>
              <span className="para bg-slate-100 text-slate-900 px-4">
                {thing.category}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-slate-50 px-3 pt-2 para-lil text-right">
            <h6 className="title-sm">{thing.title}</h6>
            <p className="line-clamp-2 text-ellipsis my-2 transition-all text-slate-400 group-hover:text-slate-200">
              {thing.article[0].paragraph}
            </p>
            <div className="flex-seperate">
              <span className="bg-slate-100 text-slate-900 px-1 font-extrabold">
                {thing.category}
              </span>
              <span>{thing.date}</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
