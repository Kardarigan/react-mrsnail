import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={product.path} dir="rtl">
      <div className="bg-slate-900 p-2">
        <div className="overflow-hidden relative group">
          <img
            src={product.cover}
            alt={product.title}
            className="group-hover:scale-125 transition-all"
          />
        </div>
        <div className="text-slate-50 px-3 py-2 flex-fullcenter title-sm text-right">
          <h5>{product.title}</h5>
          <div className="text-center">
            <h6 className="whitespace-nowrap flex items-center">
              <span className="para-lil me-1">تومان</span>
              {product.price}
            </h6>
            <span className="para bg-yellow-50 text-slate-900 px-4">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
