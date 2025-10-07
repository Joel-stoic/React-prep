// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Add from "./components/Add";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}
