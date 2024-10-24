import { blogs, categories } from "../../data/blogs";
import { hero, sorts } from "../../data/constans";
import { Breadcrumb, Carousel, Hero, Overview, Title } from "../Portal";

const Blogs = () => {
  return (
    <>
      <Breadcrumb />
      <Title title="اخبار و مقالات" />
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
