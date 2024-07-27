import "./Search.scss";

import prod from "../../../assets/products/earbuds-prod-1.webp";
// to pass value from one page to another page we have to use props
// we have to
import { MdClose } from "react-icons/md";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search_modal">
      <div className="form_field">
        <input type="text" autoFocus placeholder="Search For Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search_result_content">
        <div className="search_results">
          <div className="search_result_item">
            <div className="img_container">
              <img src={prod} alt="" />
            </div>
            <div className="prod_details">
              <span className="name">Product Name</span>
              <span className="desc">Product Desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
