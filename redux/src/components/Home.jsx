// src/components/Home.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/hooks/slices/userSlice.js";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name && email) {
      dispatch(addUser({ name, email }));
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <h2>Home Component</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
}
