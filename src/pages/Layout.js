import { Outlet, Link } from "react-router-dom";
import React from "react";

const ButtonStyle = {
  color: "rgb(60,60,60)",
  padding: "0.5rem 2rem",
  borderRadius: "5rem",
  backgroundColor: "rgb(255, 230, 230)",
  fontWeight: "bold",
};

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <span>Secret Santa</span>
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/draw" style={ButtonStyle}>
            <span>Draw</span>
          </Link>

          <Link to="/register" style={ButtonStyle}>
            <span>Register</span>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
