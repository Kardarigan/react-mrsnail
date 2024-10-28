import { Loaded_Animation } from "../united/Loaded_Animation";

const Form = ({ fields, submit = "ارسال" }) => {
  const { ref, className } = Loaded_Animation();
  return (
    <form className="padding-x">
      <div className="grid grid-cols-2 gap-3">
        {fields.map((item, index) => {
          const id = item.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <div
              ref={ref}
              key={index}
              className={`${item.half ? "" : "col-span-2"} ${className}`}
            >
              <label htmlFor={id} className="label">
                {item.label}
              </label>
              <div className="mt-1">
                {item.type === "textarea" ? (
                  <textarea
                    className="field min-h-[120px]"
                    required={item.required ? true : false}
                  ></textarea>
                ) : item.type === "select" ? (
                  <select className="field">
                    {item.options.map((option, index) => {
                      <option key={index}>{option}</option>;
                    })}
                  </select>
                ) : (
                  <input
                    id={id}
                    type={item.type}
                    className="field"
                    required={item.required ? true : false}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className="button button-sky mt-5 md:px-10 md:py-4" type="submit">
        {submit}
      </button>
    </form>
  );
};

export default Form;
