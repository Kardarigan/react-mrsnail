const Articles = ({ thing, id = null }) => {
  return (
    <section className="padding" id={id}>
      <div className="border grid gap-8 p-5">
        {thing.map((article, index) => {
          return (
            <article key={index}>
              <h4 className="title-sm">
                <i className=""></i>
                {article.title}
              </h4>
              <p className="para mt-2">{article.paragraph}</p>
              {article.list && (
                <ul className="para list-[square]">
                  {article.list.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
