import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import PropertyModal from "./PropertyModal";
import propertiesData from "../data/Propertydata";
import "../App.css";

const Properties = () => {
  const [recentProperties, setRecentProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "properties"));
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecentProperties(items);
      } catch (err) {
        console.error("Firestore error:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);


  const filterProperties = (list) => {
    return list.filter((prop) => {
      const q = searchTerm.toLowerCase();

      return (
        (prop.title || "").toLowerCase().includes(q) ||
        (prop.location || "").toLowerCase().includes(q) ||
        (prop.status || "").toLowerCase().includes(q) ||
        String(prop.price || "").includes(q)
      );
    });
  };

  const filteredRecent = filterProperties(recentProperties);
  const filteredAvailable = filterProperties(propertiesData);

  return (
    <div className="property-page">

   
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search properties by title, location, price..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

   
      <h2 className="section-title">Recent Properties</h2>

      {loading ? (
        <p className="loading-text">Loading properties...</p>
      ) : (
        <div className="property-grid">
          {filteredRecent.length === 0 ? (
            <p>No matching properties</p>
          ) : (
            filteredRecent.map((prop) => (
              <div
                key={prop.id}
                className="property-card"
                onClick={() => setSelectedProperty(prop)}
              >
                <img
                  src={prop.image || ""}
                  alt={prop.title || ""}
                  className="property-img"
                />
                <div className="property-info">
                  <h4>{prop.title}</h4>
                  <p className="location">📍 {prop.location}</p>
                  <p className="time">
                    {prop.createdAt
                      ? prop.createdAt.toDate().toDateString()
                      : ""}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      <h2 className="section-title">Available Properties</h2>

      <div className="property-grid">
        {filteredAvailable.length === 0 ? (
          <p>No matching properties</p>
        ) : (
          filteredAvailable.map((p) => (
            <div
              key={p.id}
              className="property-card"
              onClick={() => setSelectedProperty(p)}
            >
              <img src={p.image} alt={p.title} className="property-img" />
              <div className="property-info">
                <h4>{p.title}</h4>
                <p className="location">📍 {p.location}</p>
                <p className="price">₦{p.price}</p>
                <small>{p.status}</small>
              </div>
            </div>
          ))
        )}
      </div>

   
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default Properties;
