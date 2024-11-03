import Fuse from "fuse.js";
import { products as snailProducts } from "../../data/snails";
import { products as mainProducts } from "../../data/products";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search_Results = () => {
  const [query, updateQuery] = useState("");
  const combinedProducts = [...snailProducts, ...mainProducts];

  const fuse = new Fuse(combinedProducts, {
    keys: ["title", "category", "brand", "describe"],
  });

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  const results = fuse.search(query);
  const productResults = query === "" ? combinedProducts : results;

  return (
    <>
      <section className="padding-x py-16 mark-dark text-center">
        <div className="bg-slate-700 border-2 border-slate-700 overflow-hidden relative max-md:w-full">
          <input
            type="text"
            placeholder="نام یا مشخصات کالا رو وارد کن..."
            className="bg-transparent border-0 text-slate-50 focus-within:ring-0 ps-11 md:pe-14 pe-5 py-1 md:w-[30vw] w-[82.1vw]"
            value={query}
            onChange={onSearch}
          />
          <button
            className="ps-3 pe-3 py-1 cursor-pointer bg-slate-100 absolute right-0"
            onClick={onSearch}
          >
            <a className="fas fa-magnifying-glass" />
          </button>
        </div>
      </section>
      <section className="pagecenter padding grid gap-y-5">
        {productResults.length > 0 ? (
          <>
            {productResults.map((item, index) => {
              if (query != "") {
                item = item.item;
              }
              const path = "/محصولات/" + item.title?.split(" ").join("-");

              return (
                <Link
                  to={path}
                  className="w-full flex gap-3 bg-slate-100 p-3"
                  key={index}
                >
                  <img
                    src={item.covers[0]}
                    alt={item.title}
                    className="w-1/4 md:h-44 h-36 center-obj"
                  />
                  <div className="flex flex-col justify-between w-3/4">
                    <div>
                      <h2 className="title">{item.title}</h2>
                      <h4 className="mark mark-dark inline-block mt-2">
                        در دسته‌ی {item.category}
                      </h4>
                    </div>
                    <h3 className="text-end title-sm text-slate-800">
                      {item.price} هزار تومان
                    </h3>
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <h2 className="title text-center">نتیجه ای برای نمایش نیست</h2>
        )}
      </section>
    </>
  );
};

export default Search_Results;
