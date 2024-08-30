import { blogs, categories } from "../../data/blogs";
import { hero, sorts } from "../../data/constans";
import { Carousel, Hero, Overview } from "../Portal";

const Blogs = () => {
  return (
    <>
      <Hero thing={hero.blogs} />
      <Carousel
        title="آخرین مطالب"
        things={blogs}
        type="blog"
        id="firstSection"
      />
      <Carousel title="پرطرفدار ترین مطالب" things={blogs} type="blog" dark />
      <Overview
        things={blogs}
        type="blog"
        sortOptions={sorts.blogs}
        filters={categories}
      />
    </>
  );
};

export default Blogs;
