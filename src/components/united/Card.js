import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ thing, type = "product" }) => {
  const persianType = type === "product" ? "محصولات" : "مقالات";
  const path = "/" + persianType + "/" + thing.title.split(" ").join("-");

  const formattedPrice =
    type === "product" && thing.price
      ? thing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : null;

  return (
    <div className="flex-fullcenter" dir="rtl">
      <div
        className={`bg-slate-900 p-2 pb-3 group w-[280px] ${
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
              <h2 className="line-clamp-2 md:text-lg text-xl">{thing.title}</h2>
            </Link>
            <div>
              <hr className="my-2 opacity-30" />
              <div className="flex-seperate items-start para">
                <a
                  href="https://t.me/m_r_snail"
                  className="button button-light px-3 py-1 w-auto"
                  onClick={() =>
                    alert(
                      "شما به تلگرام آقای حلزون جهت درخواست سفارش هدایت خواهید شد."
                    )
                  }
                >
                  <i className="fa-sharp-duotone fa-sharp fa-bag-shopping me-1" />
                  ثبت سفارش
                </a>
                <h5 className="whitespace-nowrap flex flex-col items-center relative text-end para">
                  {thing.price > 0 ? (
                    <>
                      <b className="title-sm">{formattedPrice}</b>
                      <span className="text-[10px] absolute sm:top-5 top-4 font-extralight">
                        هزار تومان
                      </span>
                    </>
                  ) : (
                    <>
                      <b className="title-sm relative -top-1">متغیر</b>
                      <span className="text-[10px] absolute top-4 font-extralight">
                        قیمت
                      </span>
                    </>
                  )}
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
