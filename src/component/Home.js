import React from "react";
import "../App.css";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section id="home" className="hero">
        {/* NAVBAR */}

        <header className="navbar">
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#properties">Properties</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <div className="nav-right">
            <div className="logo">
              <img src={logo} alt="Web3Realestage Logo" id="logo" />
            </div>
          </div>
        </header>

        <div className="hero-inner container">
          <div className="hero-copy">
            <div className="eyebrow">become a</div>
            <h1 className="hero-title">
              <span className="accent">Legitimate</span> <br /> house{" "}
              <span className="accent">owner</span>
            </h1>
            <p className="hero-text">
              Your journey to the perfect home begins here. Explore beautiful
              properties designed for modern living, lasting comfort, and a
              secure investment you can trust.
            </p>
            <div className="cta-row">
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("properties")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RECENTLY ADDED */}
      <section id="properties" className="section">
        <div className="container">
          <div className="recent-row">
            <div className="recent-title">
              <h3>
                recently Added <span className="blue">properties</span>
              </h3>
              <p className="muted">
                Explore new listings and contact us for viewing appointments.
              </p>
              <button
                className="explore-btn"
                onClick={() => alert("Explore clicked")}
              >
                Explore
              </button>
            </div>

            <div className="cards">
              <div className="prop-card">
                <img
                  alt="Property 1"
                  src="https://images.unsplash.com/photo-1560185127-6fe3a1a972b3?auto=format&fit=crop&w=800&q=60"
                />
              </div>
              <div className="prop-card">
                <img
                  alt="Property 2"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
                />
              </div>
              <div className="prop-card">
                <img
                  alt="Property 3"
                  src="https://images.unsplash.com/photo-1505691723518-36a8b3f0c5c8?auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divide-box"></div>

      {/* WHY CHOOSE US */}
      <section id="about" className="why">
        <div className="container">
          <h3 className="title">Why Choose Us?</h3>
          <p>
            At Web3 Real Estate, we believe the future of property investment
            lies in transparency, accessibility, and <br /> collaboration. Our
            platform combines the reliability of blockchain with the creativity
            of virtual environments to create a new way of owning <br /> and
            experiencing real estate.{" "}
          </p>

          <p>
            Every transaction is secure, traceable, and free from traditional
            intermediaries, giving you full control and
            <br /> confidence in your investment. We make property ownership
            borderless—allowing anyone, anywhere, to explore, buy, or invest in
            industrial assets through <br />
            walk through virtual representations of real properties, making
            decisions based on real-time, interactive experiences.{" "}
          </p>

          <p>
            What truly sets us apart is our community. Engineers, investors, and
            marketers all contribute to a shared ecosystem <br /> where
            collaboration is rewarded and growth is collective. With
            decentralized governance at our core, every participant has a voice
            in <br /> shaping the future of the platform.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <div className="container">
          <h3 className="title">Meet the Team</h3>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar">
                <img
                  alt="Bello Qaweeyah"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=60"
                />
              </div>
              <h4>Bello Qaweeyah</h4>
              <p className="role">CoFounder</p>
              <p className="small">
                Computer Scientist / Full-stack Developer / UI-UX Designer
              </p>
            </div>

            <div className="team-card">
              <div className="avatar">
                <img
                  alt="Adesiyan Adeyemi"
                  src="https://images.unsplash.com/photo-1531123414780-fbd3a45d8362?auto=format&fit=crop&w=600&q=60"
                />
              </div>
              <h4>Adesiyan Adeyemi</h4>
              <p className="role">Founder</p>
              <p className="small">
                Geologist / React-native Developer / Realtor
              </p>
            </div>

            <div className="team-card">
              <div className="avatar placeholder" />
              <h4>Coming Soon</h4>
              <p className="role">Team</p>
              <p className="small">More experts joining our team</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission">
        <div className="container">
          <h3 className="title">Our Mission?</h3>
          <p>
            We are on a mission to build a thriving community that brings
            together building engineers, investors, and <br />
            marketers each playing a crucial role in the real estate cycle.
            Through smart contracts and transparent blockchain operations, we
            will enable seamless
            <br />
            collaborations and empower individuals to earn based on their
            contributions to successful property sales and project completions.
          </p>
        </div>
      </section>

      <div className="divide-box"></div>

      {/* PARTNERS */}
      <section className="partners">
        <div className="container">
          <h4 className="title">Partners</h4>
          <div className="partner-row">
            <img alt="partner" src="()" />
            <img alt="partner" src="" />

            <img
              alt="partner"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Adron_logo.png/800px-Adron_logo.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
