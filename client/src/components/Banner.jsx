import React from 'react';
import logo from "./water-tribe.png";

var Banner = (props) => (
  <div className="banner">
    <img className="logo" src={logo} style={{ width: "90px", height: "90px" }}></img>

    <div className="nav-btn">
      <div className="home">Home</div>
      <div className="divider" />
      <div className="product">Products</div>
      <div className="divider" />
      <div className="about-us">About Us</div>
    </div>

    <div className="title">
      <span><h1>Sokka</h1></span>
      <p className="sub-title">Fashion for both poles and everywhere in between.</p>
    </div>
  </div>
)

export default Banner;