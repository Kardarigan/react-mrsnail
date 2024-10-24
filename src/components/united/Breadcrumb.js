import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-gray-400 bg-slate-50 px-5 py-2">
      <div className="pagecenter flex space-x-2 items-center para-lil">
        <Link to="/" className="hover:underline">
          خانه
        </Link>

        {pathnames.map((segment, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={to}>
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-600">
                  {decodeURIComponent(segment).replaceAll("-", " ")}
                </span>
              ) : (
                <Link to={to} className="hover:underline">
                  {decodeURIComponent(segment).replaceAll("-", " ")}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
