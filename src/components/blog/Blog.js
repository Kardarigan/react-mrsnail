import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { Hero } from "../Portal";

const Blog = () => {
  const { blog } = useParams();
  const path = blog.split("-").join(" ");
  const theBlog = blogs.find((e) => e && e.title === path);

  const heroData = {
    title: theBlog.title,
    cover: theBlog.cover,
    path: "#firstSection",
  };

  return (
    <>
      <Hero thing={heroData} />
      <blog_conrol thing={}/>
    </>
  );
};

export default Blog;
