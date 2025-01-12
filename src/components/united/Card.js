import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ thing, type = "product" }) => {
  const persianType = type === "product" ? "محصولات" : "مقالات";
  const path = "/" + persianType + "/" + thing.title.split(" ").join("-");
  const titleRef = useRef(null);
  const [isMultipleLines, setIsMultipleLines] = useState(false);

  useEffect(() => {
    const adjustFontSize = () => {
      const titleElement = titleRef.current;
      if (titleElement) {
        const initialFontSize = window.getComputedStyle(titleElement).fontSize;
        const lineHeight = window.getComputedStyle(titleElement).lineHeight;
        const originalFontSize = parseFloat(initialFontSize);
        let fontSize = originalFontSize;

        const isTextOverflowing = () => {
          return titleElement.scrollHeight > parseFloat(lineHeight);
        };

        while (isTextOverflowing() && fontSize > 10) {
          fontSize--;
          titleElement.style.fontSize = fontSize + "px";
        }
        if (!isTextOverflowing()) {
          setIsMultipleLines(true);
        }
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => window.removeEventListener("resize", adjustFontSize);
  }, []);

  const formattedPrice =
    type === "product" && thing.price
      ? thing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;

  return (
    <div className="flex-fullcenter" dir="rtl">
      <div
        className={`bg-slate-900 p-2 group w-[280px] ${
          type === "product" ? "h-[400px]" : "h-[300px]"
        }`}
      >
        <div
          className={`overflow-hidden relative group ${
            type === "product" ? "h-[70%]" : "h-3/5"
          }`}
        >
          <Link to={path}>
            <img
              src={type === "blog" ? thing.cover : thing.covers[0]}
              alt={thing.title}
              className="group-hover:scale-125 transition-all center-obj size-full"
            />
          </Link>
          <h5 className="para-sm mark mark-dark absolute top-0 left-0 pb-3 pe-2">
            <Link to={"/" + thing.category}>{thing.category}</Link>
          </h5>
        </div>
        {type === "product" ? (
          <div className="text-slate-50 px-3 py-2 text-right flex flex-col justify-between h-[30%]">
            <Link to={path}>
              <h2
                className={`${
                  isMultipleLines
                    ? "line-clamp-2 md:text-lg text-xl"
                    : "md:text-xl"
                } `}
                ref={titleRef}
              >
                {thing.title}
              </h2>
            </Link>
            <div>
              <hr className="my-2 opacity-30" />
              <div className="flex-seperate para">
                <a
                  href="https://t.me/m_r_snail"
                  className="button button-light px-3"
                  onClick={() =>
                    alert(
                      "شما به تلگرام آقای حلزون جهت درخواست سفارش هدایت خواهید شد."
                    )
                  }
                >
                  <i className="fa-sharp-duotone fa-sharp fa-bag-shopping me-1" />
                  ثبت سفارش
                </a>
                <h5 className="whitespace-nowrap flex flex-col relative text-end para">
                  <b className="title-sm">{formattedPrice}</b>
                  <span className="text-[10px] absolute top-5 font-extralight">
                    هزار تومان
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-slate-50 px-3 pt-2 para-lil text-right h-2/3">
            <Link to={path}>
              <h2 className="title-sm truncate">{thing.title}</h2>
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
