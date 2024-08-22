const blog_main = ({ blog }) => {
  return (
    <section className="pagecenter p-5">
      <img
        src={blog.cover}
        alt={blog.title}
        className="center-obj w-full max-h-96"
      />
      <div className="grid gap-y-10">
        {blog.article.map((item, index) => {
          return (
            <article className="max-w-[800px]">
              <img
                src={item.cover}
                alt={item.title}
                className="center-obj w-full max-h-96"
              />
              <h2 className="title-sm">{item.title}</h2>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default blog_main;
