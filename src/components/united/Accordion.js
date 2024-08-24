import { useState } from "react";

const Accordion = ({ label, describe }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full transition-[max-height] cursor-pointer duration-200 px-8 py-5 text-slate-100 bg-slate-900 overflow-hidden ${
        open ? "max-h-96" : "max-h-[66px]"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex-seperate">
        <h5 className="font-bold">{label}</h5>
        <i
          className={`fa-sharp fa-solid fa-chevron-down transition-all duration-300 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <div className="mt-5 para-sm text-slate-300">{describe}</div>
    </div>
  );
};

export default Accordion;
