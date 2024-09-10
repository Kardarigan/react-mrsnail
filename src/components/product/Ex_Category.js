import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { Hero, Overview } from "../Portal";
import { categories } from "../../data/constans";

const Ex_Category = () => {
  const { category } = useParams();
  const theCategory = categories.filter((e) => e.label === category);
  const sortedThings = products.filter((e) => e.category === category);
  console.log(sortedThings);

  return (
    <>
      <Hero thing={theCategory.hero} />
      {/* <Overview things={sortedThings} filters={false} /> */}
    </>
  );
};

export default Ex_Category;
