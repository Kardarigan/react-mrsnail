import { useParams } from "react-router-dom";
import { categories as constCategories, sorts } from "../../data/constans";
import { Breadcrumb, Hero, Overview } from "../Portal";
import { products } from "../../data/products";
import { categories as snailCategories } from "../../data/snails";

const Ex_Category = () => {
  const { category } = useParams();
  const combinedCategories = [...constCategories, ...snailCategories];
  const theCategory = combinedCategories.find((cat) => cat.label === category);
  const theProducts = products.filter((prod) => prod.category === category);

  return (
    <>
      <Breadcrumb />
      <Hero thing={theCategory?.hero} />
      <Overview
        things={theProducts}
        sortOptions={sorts.products}
        filters={false}
      />
    </>
  );
};

export default Ex_Category;
