import { Link } from "react-router-dom";
import Logo from "../../asset/images/Logo.png";
import { navmenu } from "../../data/constans";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-slate-900">
        <div className="pagecenter flex-seperate max-md:px-5 text-blue-100 py-3">
          <Link to="/" className="name">
            <div></div>
            <h1 className="pt-2">MR.SNAIL</h1>
          </Link>
          <Link to="/">
            <img
              src={Logo}
              alt="Mr.Snail Logo"
              className="md:w-16 w-10 rounded-full bg-slate-200 hover:bg-yellow-200 transition-all hover:shadow hover:shadow-yellow-300"
            />
          </Link>
          <Link to="/" className="name">
            <div></div>
            <h1 className="py-2">آقای حلزون</h1>
          </Link>
        </div>
      </header>
      <nav className="bg-blue-50 px-5">
        <div className="pagecenter flex-seperate py-2">
          <div className="bg-slate-900 border-2 border-slate-900 overflow-hidden relative max-md:w-full">
            <input
              type="text"
              className="bg-transparent border-0 text-slate-50 focus-within:ring-0 ps-2 md:pe-14 pe-5 py-1 md:w-[30vw] w-[82.1vw]"
            />
            <button className="ps-3 pe-3 py-1 cursor-pointer bg-slate-50 absolute right-0">
              <a class="fas fa-magnifying-glass" />
            </button>
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
      </nav>
    </>
  );
};

export default Navbar;
