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
    console.log("Form submitted with data:", formData);

    try {
      await addDoc(usersCollection, formData);
      setMessage("Registration successful!");
    } catch (e) {
      setMessage(e.message);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit} className="">
        <h3>Register to receive a gift from your Secret Santa</h3>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className=""
          placeholder="Name"
        />

        <input
          required
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className=""
          placeholder="Address"
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
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
