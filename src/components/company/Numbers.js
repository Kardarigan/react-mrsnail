import { about } from "../../data/constans";

const Numbers = () => {
  return (
    <section className="bg-blue-50 padding">
      <div className="container grid grid-cols-7 md:gap-x-5 gap-3">
        {about.numbers.map((item, index) => {
          return (
            <>
              <div className="text-center" key={index}>
                <h6 className="text-slate-900 title-lg">{item.number} +</h6>
                <h4 className="md:text-sm text-[10px] bg-slate-900 text-slate-200 md:mt-3 mt-1">
                  {item.title}
                </h4>
              </div>
              {index != about.numbers.length && (
                <div className="w-[1px] bg-slate-950 h-full mx-auto bg-opacity-10" />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Numbers;
