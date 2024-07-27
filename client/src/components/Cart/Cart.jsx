import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart_panel">
      <div className="opac_layer"></div>
      <div className="cart_content">
        <div className="cart_header">
          <span className="heading">Shopping Cart</span>
          <span className="close_btn" onClick={() => setShowCart(false)}>
            <MdClose />

            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty_cart">
          <BsCartX />
          <span>No Products in the Cart.</span>
          <button className="return_cta">RETURN TO SHOP</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart_footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;1234</span>
            </div>
            <div className="button">
              <button className="checkout_cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
