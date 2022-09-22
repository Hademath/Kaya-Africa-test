import React from "react";
import { Link } from "react-router-dom";
import "./footerStyle.css";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
const FooterComponent = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__item">
            {/* <img src="http://placehold.it" alt="LOGO" /> */}
            FASHION LOGO
            <Link to="/shopping">
              <button>SHOP NOW</button>{" "}
            </Link>
            <span style={{ fontSize: "40px" }}>
              <Link
                style={{ fontSize: "30px", color: "#ffffff" }}
                to="/admin_page"
              >
                Admin Board
              </Link>
            </span>
          </div>
          <div className="footer__item">
            <h1>FASHION SHOP </h1>
            <Link to="/Females_ware"> Female Cloth</Link>
            <Link to="/male_ware"> Make Wares</Link>
            <Link to="/kids"> Kids </Link>
            <Link to="/harmattern"> Harmattern </Link>
            <Link to="/winter"> Winter Ware</Link>
          </div>

          <div className="footer__item">
            <h1>ABOUT</h1>
            <Link to="#"> Who We Are</Link>
            <Link to="#"> Our Team</Link>
            <Link to="#"> Term Ans Condition</Link>
            <Link to="#"> Contact Us</Link>
            <Link to="#"> Privacy Policy</Link>
          </div>
          <div className="footer__item">
            <h1>CUSTOMER SERVICE</h1>
            <span>Phone : 09037325535</span>
            <span>Email :hademath1@gmail.com</span>
            <span>Address : 1, Ogunlana Drive, Surulere, Lagos</span>
            <span>Opening: Mon - Fri 8:00 - 20:00</span>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <h3>© 2022 fashionshop.com</h3>
            <h4> All Rights Reserved</h4>
          </div>
          <div className="footer__bottom__right">
            <h2>Follow Us</h2>
            <div>
              <i className="fab fa-facebook-f"></i>
              {/* <FontAwesomeIcon icon={faAnchorLock} />; */}
              {/* <FontAwesomeIcon icon={brands("twitter")} /> */}
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              {/* <FontAwesomeIcon icon={icon} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterComponent;
