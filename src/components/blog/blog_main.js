import { Link } from "react-router-dom";
import { Accordion, Blog_Side } from "../Portal";
import { Loaded_Animation } from "../united/Loaded_Animation";

const blog_main = ({ blog }) => {
  return (
    <>
      <main className="pagecenter p-5 pb-40">
        <div className="flex max-lg:flex-col justify-between gap-12">
          <section className="">
            <div className="grid gap-y-16">
              {blog.article.map((item, index) => {
                const { ref, className } = Loaded_Animation();
                return (
                  <article className="mt-5" key={index}>
                    {item.cover && (
                      <>
                        <img
                          ref={ref}
                          src={item.cover}
                          alt={item.title}
                          className={`center-obj w-full max-h-96 ${className}`}
                        />
                        {item.coverLabel ? (
                          <p className="para-sm text-slate-500 mt-2">
                            {blog.coverLabel}
                          </p>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                    <h2 className="title-sm my-5 mark mark-dark">
                      {item.title}
                    </h2>
                    <p className="para">{item.paragraph}</p>
                    {item.list && (
                      <ul className="list-[square] ps-10 grid gap-y-2 mt-5">
                        {item.list.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    )}
                    {item.links && (
                      <ul className="grid gap-y-2 mt-5 font-bold">
                        {item.links.map((item, index) => {
                          const path = "/مقالات/" + item.split(" ").join("-");
                          return (
                            <li key={index}>
                              <Link
                                to={path}
                                className="underline hover:no-underline transition-all"
                              >
                                {item}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </article>
                );
              })}
            </div>
            {blog.nextOnes && (
              <div className="my-24">
                <h3>خواندن این مقالات را شدیدا پیشنهاد میکنیم :</h3>
                <ul className="grid gap-y-2 mt-5 font-bold para-sm">
                  {blog.nextOnes.map((item, index) => {
                    const path = "/مقالات/" + item.split(" ").join("-");
                    return (
                      <li key={index}>
                        <Link
                          to={path}
                          className="underline hover:no-underline transition-all"
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {blog.faq && (
              <>
                <hr className="mt-8 mb-12" />
                <div className="grid gap-y-3">
                  <h2 className="title-sm mb-3">ممکنه از خودت بپرسی: </h2>
                  {blog.faq.mainEntity.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        label={item.name}
                        describe={item.acceptedAnswer.text}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </section>
          <Blog_Side blog={blog} />
        </div>
      </main>
    </>
  );
};

export default blog_main;
