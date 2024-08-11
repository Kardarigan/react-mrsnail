import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer, Loading } from "./Portal";
import { useState, useEffect } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      <Navbar />
      <main className="relative text-slate-900" dir="rtl">
        {loading ? <Loading /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
