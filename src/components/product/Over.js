import { Link } from "react-router-dom";
import { orderLink, shareButtons } from "../../data/constans";
import { Share_Button } from "../Portal";

const Over = ({ product }) => {
  const hereUrl = window.location.href;
  return (
    <div className="max-lg:p-5 max-lg:mt-12 flex flex-col gap-y-8 relative">
      {!product.stock && (
        <div className="text-end absolute left-0 top-[-30px]">
          <h6 className="inline mark bg-red-600 text-slate-50">ناموجود</h6>
        </div>
      )}
      <h1 className="title-lg">{product.title}</h1>
      <hr />
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
      <hr />
      <div>
        <h2 className="title-sm mark mark-dark inline">
          قیمت : {product.price} هزار تومن
        </h2>
        <div className="mt-12 mb-5 flex items-center">
          <i class="fa-sharp fa-solid fa-circle-exclamation" />
          <div className="label text-xs ms-2">
            <h6>
              برای تعداد پایین تلگرام پیام دهید, در غیر اینصورت لطفا زنگ بزنید!
            </h6>
            <h6>
              برای ساکنین <b>تهران</b> و <b>حومه</b> امکان ارسال تنگ و آکواریوم
              وجود دارد.
            </h6>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-2 mt-2">
          {orderLink.map((button, index) => {
            return (
              <a
                href={button.path}
                key={index}
                className={`button ${index > 0 ? "button-dark" : "button-sky"}`}
              >
                <div className="flex-fullcenter gap-2">
                  <i className={button.icon}></i>
                  {button.label}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="flex">
        <h6 className="label">اشتراک گزاری :</h6>
        <ul className="flex gap-x-3 title-sm ms-3">
          {shareButtons.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href + hereUrl} title={item.title}>
                  <i className={item.icon + " hover:scale-125"}></i>
                </a>
              </li>
            );
          })}
          <li>
            <Share_Button
              text="آقای حلزون یه کالایی آورده که باید ببینی!"
              customClass="hover:scale-125"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Over;
