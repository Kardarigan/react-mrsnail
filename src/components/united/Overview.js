import { Card } from "../Portal";

const Overview = ({ things, filters }) => {
  return (
    <section className="pagecenter padding-y max-md:px-5">
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
        d
      </div>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {things.map((card, index) => {
          return <Card product={card} />;
        })}
      </div>
    </section>
  );
};

export default Overview;
