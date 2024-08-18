import { Link } from "react-router-dom";
import { orderLink } from "../../data/constans";

const Over = ({ product }) => {
  return (
    <div className="max-lg:p-5 max-lg:mt-12 flex flex-col gap-y-12">
      <div>
        <h1 className="title-lg">{product.title}</h1>
        <h2>دسته‌بندی : {product.category}</h2>
      </div>
      <div className="">
        <h2 className="title mark mark-dark inline">
          قیمت : {product.price} هزار تومن
        </h2>
        <div className="flex max-md:flex-col gap-2 mt-5">
          {orderLink.map((button, index) => {
            return (
              <Link
                to={button.path}
                key={index}
                className={`button ${index > 0 ? "button-dark" : "button-sky"}`}
              >
                <div className="flex items-center gap-2">
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
