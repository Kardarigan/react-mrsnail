import { about } from "../../data/constans";
import { Count_Animation } from "../united/Count_Animation";

const Numbers = () => {
  return (
    <section className="bg-blue-50 padding">
      <div className="container grid grid-cols-7 md:gap-x-5">
        {about.numbers.map((item, index) => {
          const { count, elementRef } = Count_Animation(item.number, 1200);
          return (
            <>
              <div className="text-center" key={index} ref={elementRef}>
                <h6 className="text-slate-900 md:title-lg title">{count}+</h6>
                <h4 className="para-lil mark mark-dark md:mt-3 mt-1">
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
