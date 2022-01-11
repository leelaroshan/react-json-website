import React from 'react';
import logo from "../images/leelag.png"

export default function Navbar() {
    return (
      <div className="navbar-container">
        <img src={logo} width="50px" height="50px" className="logo" />
        <div className="heading">
          <h4>React Developer </h4>
        </div>
      </div>
    );
}
