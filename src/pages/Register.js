import React, { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    number: "",
    isAllowed: true,
    isAvailable: true,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const usersCollection = collection(db, "users");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(usersCollection, formData);
      setMessage("Registration successful!");
      setLoading(false);
    } catch (e) {
      setMessage(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} className="">
        <h3>Register to receive a gift from secret Santa</h3>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className=""
          placeholder="Name"
          spellCheck="false"
        />

        <input
          required
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className=""
          placeholder="Address"
          spellCheck="false"
        />

        <input
          required
          type="text"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          className=""
          placeholder="Mobile number"
        />

        <button type="submit" className="">
          Submit
        </button>
        {loading && <p style={{ margin: "2rem 0" }}>Loading...</p>}
        {message && <p style={{ margin: "2rem 0" }}>{message}</p>}
      </form>
    </div>
  );
};

export default Register;
