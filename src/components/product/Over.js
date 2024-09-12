import { Link } from "react-router-dom";
import { orderLink } from "../../data/constans";

const Over = ({ product }) => {
  return (
    <div className="max-lg:p-5 max-lg:mt-12 flex flex-col gap-y-12 relative">
      <div className="text-end absolute left-0">
        <h6 className="inline mark bg-red-600">ناموجود</h6>
      </div>
      <h1 className="title-lg">{product.title}</h1>
      <div className="grid gap-y-2">
        {product.specs.map((item, index) => {
          if (index < 4) {
            return (
              <h2>
                {item.label}: {item.describe}
              </h2>
            );
          }
        })}
      </div>
      <div>
        <h2 className="title-sm mark mark-dark inline">
          قیمت : {product.price} هزار تومن
        </h2>
        <p className="label mt-12">
          برای تعداد پایین تلگرام پیام دهید, در غیر اینصورت لطفا زنگ بزنید!
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
