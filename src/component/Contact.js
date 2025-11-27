import React from "react";
import "../App.css";
import telegram from "../images/socials/telegram.png";
import whatsapp from "../images/socials/whatsapp.jpg";
import facebook from "../images/socials/facebook.png";
import instagram from "../images/socials/instagram.png";
import tiktok from "../images/socials/tiktok.png";
import twitter from "../images/socials/twitter.png";

const Contact = () => {
  return (
    <div className="Contact-sect">
      <div className="c-box">
        <div className="c-textbox">
          <h2>
            Join <br /> our Telegram <br /> discussion <br /> channel
          </h2>
        </div>
        <img src={telegram} alt="Telegram" id="telegram" />
      </div>

      <div className="c-box">
        <div className="c-textbox">
          <h2>
            Follow our <br /> social media
            <br /> handle
          </h2>
        </div>

        <div className="social-links">
          <div className="links">
            <a href="https://www.facebook.com"><img src={facebook} alt="facebook" id="facebook" /></a>
            <a href="https://www.tiktok.com"><img src={tiktok} alt="tiktok" id="tiktok" /></a>
          </div>
          
          <div className="links">
             <a href="https://www.instagram.com"><img src={instagram} alt="instagram" id="instagram" /></a>
             <a href="https://www.x.com"><img src={twitter} alt="twitter" id="twitter" /></a>
          </div>
        </div>
      </div>

      <div className="c-box">
        <div className="c-textbox">
          <h2>
            Join <br /> our Whatsapp <br /> channel for<br />trending updates</h2>
        </div>
        <img src={whatsapp} alt="whatsapp" id="whatsapp" />
      </div>
    </div>
  );
};

export default Contact;
