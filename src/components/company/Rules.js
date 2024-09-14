import { policy } from "../../data/policy";

const Rules = () => {
  return (
    <section className="pagecenter max-md:p-5">
      <div className="flex gap-5 max-md:flex-col">
        {policy.map((item, index) => {
          return (
            <div className="box md:w-1/3" key={index}>
              <h2>{item.title}</h2>
              <ul className="grid gap-y-3 mt-8">
                {item.items.map((rule, index) => {
                  const path = "/قوانین/" + rule.split(" ").join("-");

                  return (
                    <>
                      <li className="text-center" key={index}>
                        <a href={path} className="hover:underline">
                          {rule}
                        </a>
                      </li>
                      {index + 1 != item.items.length && (
                        <hr className="mx-12 opacity-50" />
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Rules;
