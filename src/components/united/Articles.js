import { lastArticles } from "../../data/constans";

const Articles = () => {
  return (
    <section className="padding grid gap-3">
      {lastArticles.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="title-sm">{item.title}</h4>
            <p className="para mt-2">{item.paragraph}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Articles;
