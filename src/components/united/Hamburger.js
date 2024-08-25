import { NavLink } from "react-router-dom";
import { navbar, navmenu, social } from "../../data/constans";

const Hamburger = () => {
  return (
    <menu
      className="text-slate-100 p-5 ps-9 flex flex-col justify-between h-full"
      dir="rtl"
    >
      <div>
        <ul className="grid gap-y-3">
          {navbar.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} className="button button-dark">
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <h3 className="mt-8 mb-3">دسته بندی ها</h3>
        <ul className="grid gap-y-3">
          {navmenu.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.path} className="button button-dark">
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-center">
        <ul className="flex gap-4">
          {social.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item.path}
                  className={`${item.colorClass} hover:text-xl border-2 border-slate-100 transition-all size-12 text-center flex-fullcenter rounded-full`}
                >
                  <i className={`fa-brands  ${item.iconClass}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </menu>
  );
};

export default Hamburger;
