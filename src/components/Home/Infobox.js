import { Loaded_Animation } from "../united/Loaded_Animation";

const Infobox = ({ title, things }) => {
  return (
    <section className="pagecenter padding-y px-5 py-10">
      <div className="text-center">
        <h3 className="title-sm inline mark-dark px-8 py-5">{title}</h3>
      </div>
      <div className="mt-12 grid lg:grid-cols-4 grid-cols-2 gap-5">
        {things.map((item, index) => {
          const { ref, className } = Loaded_Animation();
          return (
            <div className={`box text-center p-0 ${className}`} ref={ref}>
              <div className="w-full h-20 flex-fullcenter bg-slate-700 title">
                <i className={item.icon} />
              </div>
              <div className="px-8 py-5">
                <h3>{item.title}</h3>
                <p className="para-sm mt-2 text-slate-300">{item.describe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Infobox;
