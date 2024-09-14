import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-gray-500 pagecenter py-5 padding-x">
      <Link to="/" className="hover:underline">
        خانه
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        // const value = decodeURIComponent(value);
        const isLast = index === pathnames.length - 1;
        return (
          <React.Fragment key={to}>
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-gray-700">{value}</span>
            ) : (
              <Link to={to} className="hover:underline">
                {value}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
