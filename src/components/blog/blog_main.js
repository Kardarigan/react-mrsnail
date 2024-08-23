import { Accordion, Blog_Side } from "../Portal";

const blog_main = ({ blog }) => {
  return (
    <>
      <main className="pagecenter p-5 pb-40">
        <img
          src={blog.cover}
          alt={blog.title}
          className="center-obj w-full max-h-96"
        />
        <p className="para-sm text-slate-500 mt-2">{blog.coverLabel}</p>
        <div className="flex justify-between lg:gap-x-4">
          <section className="max-w-[800px]">
            <div className="grid gap-y-10 mt-10">
              {blog.article.map((item, index) => {
                return (
                  <article className="mt-5" key={index}>
                    {item.cover && (
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="center-obj w-full max-h-96"
                      />
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
                  </article>
                );
              })}
            </div>
            {blog.faq && (
              <>
                <hr className="mt-8 mb-12" />
                <div className="grid gap-y-3">
                  <h2 className="title-sm mb-3">ممکنه از خودت بپرسی: </h2>
                  {blog.faq.map((item, index) => {
                    return (
                      <Accordion
                        key={index}
                        label={item.queiz}
                        describe={item.answer}
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
