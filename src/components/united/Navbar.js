import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../asset/images/mr-logo.png";
import { categories, navbar } from "../../data/constans";
import { useEffect, useRef, useState } from "react";
import { Hamburger, Search } from "../Portal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      prevPathname.current = location.pathname;
      setHamburger(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setHamburger(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-slate-900 md:px-5 max-lg:sticky top-0 z-20">
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
          <button
            className={`md:hidden flex-fullcenter text-xl size-10 ${
              hamburger ? "" : "bg-slate-800"
            }`}
            onClick={() => setHamburger(!hamburger)}
          >
            <i
              className={`fas fa-sharp fa-bars transition-all ${
                hamburger ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>
      </header>
      <nav className="bg-slate-100 px-5">
        <div className="pagecenter flex-seperate py-2">
          <Link
            to="/جستجو"
            className="bg-slate-900 border-2 text-slate-400 hover:text-slate-100 text-center border-slate-900 px-12 py-2 overflow-hidden relative max-md:w-full"
          >
            <i className="fas fa-magnifying-glass me-2" />
            برای جستجوی کالا کلیک کنید
          </Link>
          <div className="flex">
            <div className="flex flex-row-reverse items-center gap-4 me-10 font-bold text-slate-900 max-md:hidden">
              {navbar.map((item, index) => {
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
              <span className="hover:text-slate-400">
                دسته بندی ها
                <i className="fas fa-solid fa-bars ms-2" />
              </span>
              <menu
                className={`absolute top-10 right-0 z-20 w-full displayTrans ${
                  menuOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <ul className="text-xs text-end">
                  {categories.map((item, index) => {
                    const path = item.label.split("-").join(" ");

                    return (
                      <li
                        key={index}
                        className={`mt-1 transition-all ${
                          menuOpen ? "" : `translate-y-[-100%]`
                        }`}
                      >
                        <Link
                          to={path}
                          className="hover:text-slate-400 bg-slate-900 p-2 block size-full"
                        >
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
      <section
        className={`displayTrans fixed ${
          hamburger ? "visible opacity-100" : "invisible opacity-0"
        } w-screen h-[calc(100%-64px)] top-[64px] z-20 bg-slate-900`}
      >
        <Hamburger />
      </section>
    </>
  );
};

export default Navbar;
