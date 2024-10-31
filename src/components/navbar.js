import React from 'react';
import "../sass/navbar.scss";
import BgVideo from "../images/bg.mp4";

function Navbar() {
  return (
    <div className='container'>
      <div className='overlay'>
        {/* Background Video */}
        <video className="background-video" src={BgVideo} autoPlay loop muted />

        <div className='navbar'>
          <nav className='nav'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='main-content'>
          <div className='hero'>
          <h1>HealthMaster</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Discover Now</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
