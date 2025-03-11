import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/dashboard" style={{ marginRight: "10px" }}>R-Dashboard</Link>
      </nav>
    );
  };
  

export default Navbar;
