import { useRef, useState } from "react";
import { categories } from "../../data/constans";
import { Link } from "react-router-dom";

const Blog_Side = ({ blog }) => {
  const linkElement = useRef();
  const [copied, setCopied] = useState(false);
  const pageUrl = decodeURIComponent(window.location.href);

  const removeFragmentIdentifier = (url) => {
    return url.split("#")[0];
  };

  const pageLink = removeFragmentIdentifier(pageUrl);
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(linkElement.current.textContent);
      setCopied(true);
      setTimeout(() => {
        alert("لینک مقاله کپی شد!");
      }, 500);
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
    }
  };

  return (
    <section className="text-center lg:max-w-[400px] w-full mt-10">
      <div className="sticky top-10">
        <div className="mark-dark p-5">
          <h1 className="title-sm">{blog.title}</h1>
          <div className="flex-seperate gap-x-3 bg-slate-500 mt-5 w-full">
            <button onClick={handleCopyClick} className="bg-slate-700 w-12 h-9">
              {copied ? (
                <i className="fa-sharp fa-solid fa-check text-2xl" />
              ) : (
                <span>کپی</span>
              )}
            </button>
            <p
              className="text-slate-200 whitespace-nowrap overflow-hidden px-3 py-1 select-all"
              dir="ltr"
              ref={linkElement}
            >
              {pageLink}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h6 className="title-sm font-bold mt-5">دسته‌های کالاها:</h6>
          <ul>
            {categories.map((item, index) => {
              const path = item.label.split("-").join(" ");
              return (
                <li index={index} className="mt-2">
                  <Link
                    className="w-full px-8 py-3 flex-seperate transition-all group text-slate-900 bg-slate-200 hover:text-slate-100 hover:bg-slate-800"
                    to={path}
                  >
                    <h6>
                      <i className={`me-2 ${item.icon}`} />
                      {item.label}
                    </h6>
                    <i className="fa fa-chevron-left transition-all group-hover:translate-x-[-100%]" />
                  </Link>
                </li>
              );
            })}
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blog_Side;
