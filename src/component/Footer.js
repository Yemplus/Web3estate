import React from "react";
import "../App.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="contact" className="footer">
        <div className="footer-grid container">
          <div className="footer-col">
            <div className="logo">
              <img src={logo} alt="Web3Realestage Logo" id="logo" />
            </div>
            <p className="small">Realestate, Africa</p>
          </div>

          <div className="footer-col">

            <p>
              <Link to="/">Home</Link>
            </p>

            <p>
              <Link to="/about">About Us</Link>
            </p>

            <p>
              <Link to="/properties">Properties</Link>
            </p>

            <p>
              <Link to="/contact">Contact Us</Link>
            </p>

            <p>
              <Link to="/become-affiliate">Become an Affiliate</Link>
            </p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent (demo)");
              }}
            >
              <input type="email" placeholder="Email" required className="fill" />
              <textarea rows="4" placeholder="Message" required className="fill" />
              <button type="submit" className="fill">Send mail</button>
            </form>
          </div>
        </div>

        <div className="small center">
          © {new Date().getFullYear()} Web3 RealEstate. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
