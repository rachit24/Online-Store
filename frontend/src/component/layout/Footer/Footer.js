import React from "react";
import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android</p>
        <img src={playStore} alt="playstore" />
        {/* <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>Handicraft Store</h1>
        <p>A collection that matches with everyone's personality and taste.</p>

        <p>Copyright 2022 &copy; Rachit Khurana</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="http://youtube.com">Youtube</a>
        {/* <a href="http://facebook.com">Facebook</a> */}
      </div>
    </footer>
  );
};

export default Footer;
