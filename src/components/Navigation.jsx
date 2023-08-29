import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation_container">
      <div>
        <Link to="/">
          <i class="fa-solid fa-link"></i>
        </Link>
      </div>
      <div>
        <Link to="/whatsapp">
          <i class="fa-brands fa-whatsapp"></i>
        </Link>
      </div>
      <div>
        <Link to="/instagram">
          <i class="fa-brands fa-instagram"></i>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <i class="fa-solid fa-phone"></i>
        </Link>
      </div>
      <div>
        <Link to='/sms'><i class="fa-regular fa-message"></i></Link>
      </div>
      <div>
        <Link to="/location">
          <i class="fa-solid fa-location-dot"></i>
        </Link>
      </div>
      <div>
       <Link to='/text'><i class="fa-solid fa-align-left"></i></Link>
      </div>
    </div>
  );
};

export default Navigation;
