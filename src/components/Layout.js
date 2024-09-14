import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, Loading } from "./Portal";
import { useState, useEffect, useRef } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    if (prevPathname.current !== location.pathname) {
      setLoading(true);
      prevPathname.current = location.pathname;

      window.scrollTo(0, 0);

      const loadTimeout = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(loadTimeout);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative text-slate-900" dir="rtl">
        <Loading show={loading} />
        {!loading && <Outlet />}
      </main>
      <Footer />
      <button
        className={`fixed bottom-10 left-10 button-light rounded title-sm size-12 displayTrans ${
          showBackToTop ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fa-solid fa-chevron-up mt-2" />
      </button>
    </>
  );
};

export default Layout;
