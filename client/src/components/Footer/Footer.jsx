import "./Footer.scss";

import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptatem est placeat vero? Debitis sunt magni praesentium deleniti
            illo vero doloribus exercitationem ea repellendus reprehenderit
            aspernatur laborum, sapiente maxime id!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c_item">
            <FaLocationArrow />
            <div className="text">
              venu Vihar Colony, Patel Nagar, Patna 800023
            </div>
          </div>
          <div className="c_item">
            <FaMobileAlt />
            <div className="text">Phone: 8789102621</div>
          </div>
          <div className="c_item">
            <FaEnvelope />
            <div className="text">Email: nitish123@gmail.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">HeadPhones</span>
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

      <div className="bottom_bar">
        <div className="bottom_bar_content">
          <div className="text">
            BrowseBuy 2024 CREATED BY Nitish. PREMIUM E-COMMERCE SOLUTIONS.
          </div>

          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
