import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to BrowseBuy, your ultimate destination for a seamless
            online shopping experience. At BrowseBuy, we are dedicated to
            offering a wide variety of electronic products, such as Bluetooth
            speakers, headphones, wireless earphones, and smartwatches, all at
            competitive prices. Our mission is to provide a delightful, secure,
            and convenient shopping journey. With an extensive catalog,
            user-friendly design, secure transactions, and fast, reliable
            shipping, we strive to make your online shopping experience as
            smooth and satisfying as possible.
            <br />
            <br />
            <div>Happy Shopping!</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Krishnapur, Kestopur Kolkata 700102</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8789102621</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: nitishkamath63590@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            BROWSEBUY CREATED BY Nitish Kumar. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
