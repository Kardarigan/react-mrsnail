import Fuse from "fuse.js";
import { products as snailProducts } from "../../data/snails";
import { products as mainProducts } from "../../data/products";

const Search_Results = () => {
  const combinedProducts = [...snailProducts, ...mainProducts];

  const fuse = new Fuse(combinedProducts, {
    keys: ["title", "category", "brand", "describe"],
    includeScore: true,
  });

  return (
    <section className="padding-x py-16 mark-dark text-center">
      <div className="bg-slate-900 border-2 border-slate-900 overflow-hidden relative max-md:w-full">
        <input
          type="text"
          className="bg-transparent border-0 text-slate-50 focus-within:ring-0 ps-2 md:pe-14 pe-5 py-1 md:w-[30vw] w-[82.1vw]"
        />
        <button className="ps-3 pe-3 py-1 cursor-pointer bg-slate-100 absolute right-0">
          <a className="fas fa-magnifying-glass" />
        </button>
      </div>
    </section>
  );
};

export default Search_Results;
