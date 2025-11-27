import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    signOut(auth);
    navigate("/become-affiliate");
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const q = query(
          collection(db, "properties"),
          where("userId", "==", auth.currentUser.uid),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const props = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProperties(props);
      } catch (err) {
        toast.error("Error fetching properties");
      }
      setLoading(false);
    };
    fetchProperties();
  }, []);

  const totalEarnings = properties.reduce(
    (acc, curr) => acc + Number(curr.price || 0),
    0
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-inner">
        <div className="dashboard-card">
          <h1>Affiliate Dashboard</h1>
          <p>
            Logged in as: <strong>{auth.currentUser?.email}</strong>
          </p>
          <p>
            Total Properties: <strong>{properties.length}</strong> | Total
            Earnings: <strong>${totalEarnings}</strong>
          </p>

          <div className="dashboard-buttons">
            <Link to="/upload-property">
              <button className="upload-btn">Upload New Property</button>
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>

          <h2>Your Uploaded Properties</h2>
          {loading ? (
            <p>Loading...</p>
          ) : properties.length === 0 ? (
            <p>No properties uploaded yet.</p>
          ) : (
            <div className="property-grid">
              {properties.map((prop) => (
                <div key={prop.id} className="property-card">
                  <img src={prop.image} alt={prop.title} />
                  <div className="property-info">
                    <h3>{prop.title}</h3>
                    <p>${prop.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
