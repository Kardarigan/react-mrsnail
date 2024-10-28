import { articles } from "../../data/constans";
import { Articles, Breadcrumb, Rules, Title } from "../Portal";

const Policy = () => {
  return (
    <>
      <Breadcrumb />
      <Title title="قوانین و مقررات حلزونی" />
      <Articles thing={articles.policy.overall} id="firstSection" />
      <Rules />
      <Articles thing={articles.policy.categories} />
    </>
  );
};

export default Policy;
