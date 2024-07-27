import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";

import "./CartItem.scss";

const CartItem = () => {
  return (
    <div className="cart_products">
      <div className="cart_product">
        <div className="img_container">
          <img src={prod} alt="" />
        </div>
        <div className="prod_details">
          <span className="name">product name</span>
          <MdClose className="close_btn" />
          <div className="quantity_buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>X</span>
            <span>&#8377;4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
