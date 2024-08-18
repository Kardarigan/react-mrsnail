import { useState } from "react";
import { Card } from "../Portal";

const Overview = ({ things, type = "product", sortOptions, filters }) => {
  const [sort, setSort] = useState(0);
  const handleSort = (index) => {
    setSort(index);
  };
  return (
    <section className="pagecenter padding-y max-xl:px-5">
      <div className="flex-seperate max-sm:flex-col mb-5">
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="label">
            دسته‌بندی:
          </label>
          <select id="category" className="field min-w-52 max-sm:min-w-72">
            {filters.map((item, index) => {
              return (
                <option key={index} value={item.label}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center max-sm:min-w-full">
          {sortOptions.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleSort(index)}
                className={`transition-all px-10 py-3 ${
                  index === sort
                    ? "bg-slate-300 text-slate-900"
                    : "bg-slate-800 text-slate-100"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {things.map((card, index) => {
          return <Card thing={card} type={type} />;
        })}
      </div>
    </section>
  );
};

export default Overview;
