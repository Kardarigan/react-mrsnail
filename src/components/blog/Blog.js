import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import {
  Articles,
  Blog_Control,
  Blog_Main,
  Breadcrumb,
  Carousel,
  Hero,
} from "../Portal";
import { articles } from "../../data/constans";

const Blog = () => {
  const { blog } = useParams();
  const path = blog.split("-").join(" ");
  const theBlog = blogs.find((e) => e && e.title === path);
  const familiar = blogs.filter((item) => item.category === theBlog.category);

  const heroData = {
    title: theBlog.title,
    cover: theBlog.cover,
    path: "#firstSection",
  };

  return (
    <>
      <Hero thing={heroData} />
      <Breadcrumb />
      <Blog_Control blog={theBlog} />
      <Blog_Main blog={theBlog} />
      <Carousel things={familiar} title="مقالات مشابه" type="blog" dark />
    </>
  );
};

export default Blog;
