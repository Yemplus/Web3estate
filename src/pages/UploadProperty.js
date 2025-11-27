import React, { useState } from "react";
import { db, auth, storage } from "../firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import "../App.css";

const UploadProperty = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image!");

    setLoading(true);

    try {
      const storageRef = ref(storage, `properties/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image); 
      const downloadURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, "properties"), {
        title,
        location,
        price,
        image: downloadURL,
        owner: auth.currentUser.uid,
        createdAt: Timestamp.now(),
      });

      alert("Property uploaded successfully!");
      navigate("/dashboard");
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h1>Upload New Property</h1>
        <form onSubmit={handleSubmit} className="upload-form">
          <input
            placeholder="Property Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Uploading..." : "Submit Property"}
          </button>
        </form>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default UploadProperty;
