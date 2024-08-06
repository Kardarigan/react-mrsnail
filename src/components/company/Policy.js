import { articles, hero } from "../../data/constans";
import { Articles, Hero } from "../Portal";
import Rules from "./Rules";

const Policy = () => {
  return (
    <>
      <Hero thing={hero.Policy} />
      <Articles thing={articles.policy.overall} id="firstSection" />
      <Rules />
    </>
  );
};

export default Policy;
