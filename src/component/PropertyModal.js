import React from "react";
import "../App.css";

const PropertyModal = ({ property, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>

        <img src={property.image} alt={property.title} className="modal-img" />
        <h2>{property.title}</h2>

        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> ₦{property.price}</p>
        <p><strong>Description:</strong> {property.description}</p>

        <p className="modal-date">
          {property.createdAt?.toDate().toLocaleString()}
        </p>

      
        <a href="tel:+2347035909273" className="book-btn">
          Book an Appointment
        </a>
      </div>
    </div>
  );
};

export default PropertyModal;
