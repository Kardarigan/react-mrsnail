import { useParams } from "react-router-dom";
import { categories as constCategories, sorts } from "../../data/constans";
import { Breadcrumb, Hero, Overview } from "../Portal";
import { products as mainProducts } from "../../data/products";
import {
  categories as snailCategories,
  products as snailProducts,
} from "../../data/snails";

const Ex_Category = () => {
  const { category } = useParams();
  const combinedProducts = [...mainProducts, ...snailProducts];
  const combinedCategories = [...constCategories, ...snailCategories];
  const theCategory = combinedCategories.find((cat) => cat.label === category);
  const theProducts = combinedProducts.filter(
    (prod) => prod.category === category
  );

  return (
    <>
      <Breadcrumb />
      <Hero thing={theCategory?.hero} exclusive />
      <Overview
        things={theProducts}
        sortOptions={sorts.products}
        filters={false}
      />
    </>
  );
};

export default Ex_Category;
