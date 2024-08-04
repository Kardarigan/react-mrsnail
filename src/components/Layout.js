import { Outlet } from "react-router-dom";
import { Navbar, Footer, Articles } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative text-slate-900" dir="rtl">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
