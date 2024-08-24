import { useParams } from "react-router-dom";
import { rules } from "../../data/policy";
import { Articles } from "../Portal";

const Rule = () => {
  const { rule } = useParams();
  const path = rule.split("-").join(" ");
  const theRule = rules.find((e) => e && e.title === path);

  return (
    <>
      <section className="pagecenter padding-t">
        <h1 className="title">{theRule.title}</h1>
        <p className="para-sm text-slate-500 text-end my-2">
          اعتبار قانون تا {theRule.expiration}
        </p>
        <hr />
      </section>
      <Articles thing={theRule.article} />
    </>
  );
};

export default Rule;
