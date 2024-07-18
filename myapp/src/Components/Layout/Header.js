import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-div1">
      <header>
        <div className="container">
          <div className="main-div">
          
            <div className="logo">
              <img
                src={"https://www.truckingassist.com/logo.webp"}
                alt="Logo"
              />
            </div>

            <div className="nav">
              <ul>
                <li>
                  <Link className="a" to="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="a" to="/plans&pricing">
                    Plans & Pricing
                  </Link>
                </li>

                <li>
                  <Link className="a" to="/faqs">
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link className="a" to="/contact">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link className="a" to="/starttoday">
                    <button className="btn">START TODAY</button>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
