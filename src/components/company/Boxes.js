import { contact } from "../../data/constans";

const Boxes = () => {
  return (
    <section className="pagecenter padding">
      <div className="flex gap-5 max-md:flex-col">
        {contact.boxes.map((box, index) => {
          return (
            <div
              key={index}
              className="bg-slate-900 text-slate-100 md:w-1/2 p-10"
            >
              <h2 className="title-sm bg-slate-100 text-slate-900 text-center">
                {box.title}
              </h2>
              <ul className="grid gap-y-4 mt-8">
                {box.items.map((item, index) => {
                  return (
                    <>
                      <li className="flex-seperate" key={index}>
                        <div className="flex items-center">
                          <div className="w-8 flex-fullcenter">
                            <i className={item.icon} />
                          </div>
                          <h6>{item.label} :</h6>
                        </div>
                        <span dir="ltr">{item.describe}</span>
                      </li>
                      {index + 1 != box.items.length && (
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

export default Boxes;
