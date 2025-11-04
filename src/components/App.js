import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "../styles.css";

export default function App() {
  return (
    <div className="app">
      {/* Simple nav to make going home easy (Cypress can also use back) */}
      <nav style={{ marginBottom: 16 }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}
