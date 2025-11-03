import React from 'react'
import "../App.css"

const Footer = () => {
  return (
    <div>
        <footer id="contact" className="footer">
        <div className="footer-grid container">
          <div className="footer-col">
            <h4>Web3 RealEstate</h4>
            <p className="small">
              7, Babayemi Street, Orile-Agege, Tabon-Tabon, Agege, Lagos State
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#properties">Properties</a></p>
            <p><a href="#contact">Contact Us</a></p>
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
              <input type="email" placeholder="Email" required />
              <textarea rows="4" placeholder="Message" required />
              <button type="submit">Send mail</button>
            </form>
          </div>
        </div>
        <div className="small center">
          © {new Date().getFullYear()} Web3 RealEstate. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer