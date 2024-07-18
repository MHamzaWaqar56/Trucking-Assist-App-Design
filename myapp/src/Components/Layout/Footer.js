import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main">
      <div className="main1">
        <div className="profitable">
          <h2>Always loaded and profitable</h2>
          <Link to="/tel:+17867589800" className="a1">
            Call Now (786) 758-9800
          </Link>
          <div className="logo1">
            <img
              src={"https://www.truckingassist.com/logo-white.webp"}
              alt="logo"
            ></img>
          </div>
          <div className="main-desk">
            <span>A Service By:</span>

            <div className="desk">
              <Link to={"/starttoday"} className="a2">
                <img
                  src={"https://www.truckingassist.com/calldesk-logo.webp"}
                  alt="calldesk"
                />
              </Link>
            </div>
          </div>
          <Link to="/contact">
            <button className="affliate-btn">Affiliate Program</button>
          </Link>
        </div>

        <div className="time">
          <div className="email">
            <span>Email:</span>
            <Link to="mailto:sales@truckingassist.com">
              sales@truckingassist.com
            </Link>
          </div>

          <div className="phone">
            <span>Phone:</span>
            <Link to="tel:(786) 758-9800">(786) 758-9800</Link>
          </div>

          <div className="work">
            <span>Working Hours:</span>
            <span>Mon - Fri: 7am - 5pm</span>
            <span>Dispatchers: 24/7</span>
          </div>

          <div className="address">
            <span>Address:</span>
            <span>16 Wall Street</span>
            <span>New York City - 10005</span>
            <span>NY, USA</span>
          </div>

          <div className="copy">
            <p>© 2022 Trucking Assist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
