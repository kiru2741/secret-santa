import React, { useState } from "react";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Play = () => {
  const [inputValue, setInputValue] = useState("");
  const [randomUser, setRandomUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const usersCollection = collection(db, "users");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //logic for form submission
    const users = await getDocs(usersCollection);

    let currUser = users.docs.filter((doc) => doc.id === inputValue);
    setLoading(false);

    if (currUser.length > 0 && currUser[0].data().isAllowed) {
      setMessage(
        "Hi " + currUser[0].data().name + ", You should gift this person."
      );
      //pick a random user form the available users
      const available_users = users.docs.filter(
        (doc) => doc.data().isAvailable === true && doc.id !== inputValue
      );

      const randomUser =
        available_users[Math.floor(Math.random() * available_users.length)];

      setRandomUser(randomUser);

      //update the random user as not available
      const randomUserRef = doc(db, "users", randomUser.id);
      await updateDoc(randomUserRef, { isAvailable: false });

      //update curr user as not allowed
      const currUserRef = doc(db, "users", currUser[0].id);
      await updateDoc(currUserRef, { isAllowed: false });
      //
    } else if (currUser.length > 0 && currUser[0].data().name) {
      //
      setMessage("Hi " + currUser[0].data().name + ", Your turn was over.");
      //
    } else {
      setMessage("Invalid ID!");
    }
  };

  return (
    <div className="draw-section">
      <h3>Enter your participant ID to draw a name</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Participant ID"
          required
        />

        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {randomUser && (
        <div className="drawn-user">
          <p>{randomUser.data().name}</p>
          <p>{randomUser.data().address}</p>
          <p>{randomUser.data().number}</p>
        </div>
      )}
    </div>
  );
};

export default Play;
