import React, {useState} from "react";
import "./App.css";
import logo from "./images/logo.png";
import Home from "./component/Home";
import About from "./component/About";
import Properties from "./component/Properties";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import BecomeAffiliate from "./pages/BecomeAffiliate";
import Dashboard from "./pages/Dashboard";
import UploadProperty from "./pages/UploadProperty";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <BrowserRouter>
        <header className="navbar">
          <Link to="/">
            <div className="nav-right">
              <div className="logo">
                <img src={logo} alt="Web3Realestage Logo" id="logo" />
              </div>
            </div>
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? (
              <FiX size={28} color="white" />
            ) : (
              <FiMenu size={28} color="white" />
            )}
          </div>

          <div
            className={`nav-links ${menuOpen ? "active" : ""}`}
            aria-label="Main navigation"
          >
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/properties">Properties</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-affiliate" element={<BecomeAffiliate />} />
          <Route path="/upload-property" element={<UploadProperty />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

         <Footer />
      </BrowserRouter>
     
    </div>
  );
};

export default App;
