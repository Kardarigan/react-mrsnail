import { Link, NavLink } from "react-router-dom";
import Logo from "../../asset/images/cropped_image.png";
import { footer, navmenu } from "../../data/constans";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-900 md:px-5">
        <div className="pagecenter flex-seperate max-md:px-5 text-slate-100 py-3">
          <Link to="/" className="name">
            <div></div>
            <h1 className="pt-2">MR.SNAIL</h1>
          </Link>
          <Link to="/">
            <img
              src={Logo}
              alt="Mr.Snail Logo"
              className="md:w-16 w-10 p-1 rounded-full bg-slate-200 transition-all hover:p-3"
            />
          </Link>
          <Link to="/" className="name">
            <div></div>
            <h1 className="py-2">آقای حلزون</h1>
          </Link>
        </div>
      </header>
      <nav className="bg-slate-100 px-5">
        <div className="pagecenter flex-seperate py-2">
          <div className="bg-slate-900 border-2 border-slate-900 overflow-hidden relative max-md:w-full">
            <input
              type="text"
              className="bg-transparent border-0 text-slate-50 focus-within:ring-0 ps-2 md:pe-14 pe-5 py-1 md:w-[30vw] w-[82.1vw]"
            />
            <button className="ps-3 pe-3 py-1 cursor-pointer bg-slate-100 absolute right-0">
              <a class="fas fa-magnifying-glass" />
            </button>
          </div>
          <div className="flex">
            <div className="flex flex-row-reverse items-center gap-4 px-3 font-bold text-slate-900 max-md:hidden">
              {footer.links[0].links.map((item, index) => {
                return (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="hover:text-slate-600"
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>
            <button
              onMouseOver={() => setMenuOpen(true)}
              onMouseOut={() => setMenuOpen(false)}
              className="font-bold relative px-3 py-1 flex max-md:hidden items-center bg-slate-900 text-slate-100 transition-all"
            >
              <span className="hover:text-yellow-200">
                دسته بندی ها
                <i class="fas fa-solid fa-bars ms-2" />
              </span>
              <menu
                className={`absolute top-10 right-0 z-20 w-full displayTrans ${
                  menuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <ul>
                  {navmenu.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`bg-slate-900 mt-1 transition-all ${
                          menuOpen ? "" : `translate-y-[-100%]`
                        }`}
                      >
                        <Link to={item.path} className="hover:text-yellow-200">
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </menu>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
