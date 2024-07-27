import "./Header.scss";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
  // useEffect bade kaam ki cheez hai as soon as page is loaded
  // useEffect is called
  // on each stateChange useEffect is called and we can write our logic there

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    /* // basically here we may have two class depending upon scrolled state //
      if scrolled is true then class is main_header and sticky_header // if
      scrolled is false then classis only main_header */
    <>
      <header className={`main_header ${scrolled ? "sticky_header" : ""}`}>
        <div className="header_content">
          <ul className="left">
            <li>Home</li>
            <li>About</li>
            <li>Categories</li>
          </ul>
          <div className="Center">BrowseBuy.</div>
          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart_icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
