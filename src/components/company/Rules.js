import { policy } from "../../data/constans";

const Rules = () => {
  return (
    <section className="pagecenter max-md:p-5">
      <div className="flex gap-5 max-md:flex-col">
        {policy.rules.map((item, index) => {
          return (
            <div className="box md:w-1/3">
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Rules;
