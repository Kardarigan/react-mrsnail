import React from "react";
import { Half, Hero, Articles, Middle, Numbers } from "../Portal";
import { articles, half, hero, middle } from "../../data/constans";

const About = () => {
  return (
    <>
      <Hero thing={hero.About} />
      <Middle thing={middle.about[0]} />
      <Half thing={half.about[0]} />
      <Middle thing={middle.about[0]} dark reverse />
      <Numbers />
      <Half thing={half.about[0]} right dark />
      <Articles thing={articles.home} />
    </>
  );
};

export default About;
