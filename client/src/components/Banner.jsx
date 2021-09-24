import React from 'react';
import logo from "./water-tribe.png";

var Banner = (props) => (
  <div className="banner">
    <img className="logo" src={logo} style={{ width: "90px", height: "90px" }}></img>

    <div className="nav">
      <div className="nav-btn">Home</div>
      <div className="divider" />
      <div className="nav-btn">Products</div>
      <div className="divider" />
      <div className="nav-btn">About Us</div>
    </div>

    {/* <img src={image} alt=""> */}
    <div className="title">
      <h1 id="sokka">Sokka</h1>
      {/* <p>Purrfect fashion to suit your pawsonal style. Right <em>meow.</em></p> */}
      <p className="sub-title">Fashion for both poles and everywhere in between.</p>
    </div>

    {/* <form>
      <label>
        Search:
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Search" />
    </form> */}
  </div>
)

export default Banner;