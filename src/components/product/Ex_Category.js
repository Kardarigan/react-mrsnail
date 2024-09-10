import { useParams } from "react-router-dom";
import { categories, sorts } from "../../data/constans";
import { Hero, Overview } from "../Portal";
import { products } from "../../data/products";

const Ex_Category = () => {
  const { category } = useParams();
  const theCategory = categories.find((cat) => cat.label === category);
  const theProducts = products.find((prod) => prod.category === category);
  console.log(category);

  return (
    <>
      <Hero thing={theCategory.hero} />
      <Overview
        things={theProducts}
        sortOptions={sorts.products}
        filters={false}
      />
    </>
  );
};

export default Ex_Category;
