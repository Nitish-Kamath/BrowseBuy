import "./Category.scss";

// useParams is used to extract id from url
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <div className="category_main_content">
      <div className="layout"></div>
      <div className="category_title">
        {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
      </div>
      <Products innerPage={true} products={data} />
    </div>
  );
};

export default Category;
