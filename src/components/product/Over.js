import { Link } from "react-router-dom";
import { orderLink } from "../../data/constans";
import { Tip } from "../Portal";

const Over = ({ product }) => {
  return (
    <div className="max-lg:p-5 max-lg:mt-12 flex flex-col gap-y-12">
      <h1 className="title-lg">{product.title}</h1>
      <div>
        <h2>دسته بندی : {product.category}</h2>
        <h2>برند محصول : {product.brand}</h2>
      </div>
      <div className="">
        <h2 className="title mark mark-dark inline">
          قیمت : {product.price} هزار تومن
        </h2>
        <p className="label mt-12">
          اگه تعداد بالا میخوای توی تلگرام پیام بده، در غیر این صورت بزنگ!
        </p>
        <div className="flex max-md:flex-col gap-2 mt-2">
          {orderLink.map((button, index) => {
            return (
              <Link
                to={button.path}
                key={index}
                className={`button ${index > 0 ? "button-dark" : "button-sky"}`}
              >
                <div className="flex-fullcenter gap-2">
                  <i className={button.icon}></i>
                  {button.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Over;
