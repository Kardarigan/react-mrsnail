import { articles, hero } from "../../data/constans";
import { Articles, Hero, Rules } from "../Portal";

const Policy = () => {
  return (
    <>
      <Hero thing={hero.Policy} />
      <Articles thing={articles.policy.overall} id="firstSection" />
      <Rules />
      <Articles thing={articles.policy.categories} />
    </>
  );
};

export default Policy;
