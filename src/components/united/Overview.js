import { useMemo, useState } from "react";
import { Card } from "../Portal";

const Overview = ({
  things = [],
  type = "product",
  sortOptions,
  filters = true,
}) => {
  const [sort, setSort] = useState(0);
  const [category, setCategory] = useState("همه");
  const handleCategoryChange = () => {
    let selectedCategory = document.getElementById("category").value;
    setCategory(selectedCategory);
  };

  const currentThings = useMemo(() => {
    if (!things || !things.length) {
      alert("nothing");
      return [];
    }

    let sortedThings = [...things];

    if (sort === 0) {
      sortedThings.reverse();
    } else if (sort === 2) {
      sortedThings.sort((a, b) => a.suggested - b.suggested);
    }

    if (category !== "همه") {
      sortedThings = sortedThings.filter((blog) => blog.category === category);
    }

    return sortedThings;
  }, [sort, category, things]);

  return (
    <section className="pagecenter padding-y max-xl:px-5">
      <div className="flex-seperate gap-2 max-md:flex-col mb-5 max-md:px-5">
        {filters && (
          <div className="flex items-center gap-2 max-md:w-full">
            <label htmlFor="category" className="label">
              دسته‌بندی:
            </label>
            <select
              id="category"
              className="field min-w-52 max-sm:min-w-72"
              onChange={handleCategoryChange}
            >
              <option value="همه">همه</option>
              {filters.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <div className="flex-fullcenter max-md:min-w-full">
          {sortOptions.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setSort(index)}
                className={`transition-all w-1/3 px-10 py-3 ${
                  index === sort
                    ? "bg-slate-300 text-slate-900"
                    : "bg-slate-800 text-slate-100"
                } ${index === 0 ? "" : "border-r border-slate-100"}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {currentThings.map((card) => {
          return <Card thing={card} type={type} />;
        })}
      </div>
    </section>
  );
};

export default Overview;
