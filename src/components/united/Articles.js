import { lastArticles } from "../../data/constans";

const Articles = ({ thing, id = null }) => {
  return (
    <section className="padding grid gap-3" id={id}>
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
    </section>
  );
};

export default Articles;
