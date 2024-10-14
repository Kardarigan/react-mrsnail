import { useParams } from "react-router-dom";
import { categories, sorts } from "../../data/constans";
import { Breadcrumb, Hero, Overview } from "../Portal";
import { products } from "../../data/products";

const Ex_Category = () => {
  const { category } = useParams();
  const theCategory = categories.find((cat) => cat.label === category);
  const theProducts = products.filter((prod) => prod.category === category); // Use filter for an array

  return (
    <>
      <Hero thing={theCategory?.hero} />
      <Breadcrumb />
      <Overview
        things={theProducts}
        sortOptions={sorts.products}
        filters={false}
      />
    </>
  );
};

export default Ex_Category;
