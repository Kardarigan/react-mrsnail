import { lastArticles } from "../../data/constans";

const Articles = ({ thing, id = null }) => {
  return (
    <section className="padding grid gap-3" id={id}>
      {thing.map((item, index) => {
        return (
          <div key={index}>
            <h4 className="title-sm">
              <i className=""></i>
              {item.title}
            </h4>
            <p className="para mt-2">{item.paragraph}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Articles;
