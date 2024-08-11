import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, Loading } from "./Portal";
import { useState, useEffect } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const loadTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(loadTimeout);
  }, [location]);

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
