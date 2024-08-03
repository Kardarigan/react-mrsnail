import { Outlet } from "react-router-dom";
import { Navbar, Footer, Articles } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative" dir="rtl">
        <Outlet />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
