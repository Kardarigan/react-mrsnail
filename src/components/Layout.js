import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, Loading } from "./Portal";
import { useState, useEffect, useRef } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(false); // Start with loading false
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  useEffect(() => {
    // Only set loading if the pathname has changed
    if (prevPathname.current !== location.pathname) {
      setLoading(true);
      prevPathname.current = location.pathname;

      window.scrollTo(0, 0);

      const loadTimeout = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(loadTimeout);
    }
  }, [location.pathname]); // Only trigger on pathname changes

  return (
    <>
      <Navbar />
      <main className="relative text-slate-900" dir="rtl">
        <Loading show={loading} />
        {!loading && <Outlet />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
