import { useRef, useState } from "react";

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
    <section className="text-center w-full max-lg:hidden mt-20">
      <div className="box sticky top-10">
        <h1 className="title-sm">{blog.title}</h1>
        <div className="flex-seperate gap-x-3 bg-slate-500 mt-5 w-full">
          <button onClick={handleCopyClick} className="bg-slate-700 size-12">
            {copied ? (
              <i class="fa-sharp fa-solid fa-check text-2xl" />
            ) : (
              <span>کپی</span>
            )}
          </button>
          <p
            className="text-slate-200 whitespace-nowrap overflow-hidden px-5 py-2 select-all"
            dir="ltr"
            ref={linkElement}
          >
            {pageLink}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog_Side;
