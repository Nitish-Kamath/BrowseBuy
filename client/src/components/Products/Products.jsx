import "./Products.scss";

import Product from "./Product/Product";
const Products = ({ products, innerPage, headingText }) => {
  // if (!products) return;
  return (
    <div className="products_container">
      {!innerPage && <div className="sec_heading">{headingText} </div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
