import React from 'react';

var Banner = (props) => (
  <div className="banner">
    <div className="home-button">Home</div>
    <div className="title">
      <span><h1>Project Catwalk</h1></span>
      <p>Purrfect fashion to suit your pawsonal style. Right <em>meow.</em></p>
    </div>
    <form>
      <label>
        Search:
        <input type="text" name="search" />
      </label>
      <input type="submit" value="Search" />
    </form>
  </div>
)

export default Banner;