import React from "react";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h2>noureldeen1000@gmail.com</h2>
      <div className="footer-buttons">
        <button className="footer-btn">
          <AiFillAndroid size={40} />
          <div>
            <p>Available on</p>
            <p>Android</p>
          </div>
        </button>
        <button className="footer-btn">
          <AiFillApple size={40} />
          <div>
            <p>Available on</p>
            <p>App Store</p>
          </div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
