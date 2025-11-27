import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import PropertyModal from "./PropertyModal";
import propertiesData from "../data/Propertydata";
import "../App.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "properties"));
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(items);
      } catch (err) {
        console.error("Firestore error:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading)
    return <p style={{ textAlign: "center" }}>Loading properties...</p>;

  return (
    <div className="property-page">
      <h2 className="section-title">Latest Properties</h2>
      <div className="property-grid">
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="property-card"
            onClick={() => setSelectedProperty(prop)}
          >
            <img
              src={prop.image || ""}
              alt={prop.title || "property"}
              className="property-img"
            />
            <div className="property-info">
              <h4>{prop.title || "Untitled Property"}</h4>
              <p className="location">📍 {prop.location || "Unknown location"}</p>
              <p className="time">
                {prop.createdAt ? prop.createdAt.toDate().toDateString() : "No date"}
              </p>
            </div>
          </div>
        ))}
      </div>


      <h2 className="section-title">Available Properties</h2>
      <div className="property-grid">
        {propertiesData.map((p) => (
          <div
            key={p.id}
            className="property-card"
            onClick={() => setSelectedProperty(p)}
          >
            <img
              src={p.image}
              alt={p.title}
              className="property-img"
            />
            <div className="property-info">
              <h4>{p.title}</h4>
              <p className="location">📍 {p.location}</p>
              <p className="price">₦{p.price}</p>
              <small>{p.status}</small>
            </div>
          </div>
        ))}
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
