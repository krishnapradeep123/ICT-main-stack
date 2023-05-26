import React from "react";
import Nav from "./Units/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Additem from "./Pages/Additem";
export default function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Additem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

