import React, { Component } from "react";
// import { animateScroll as scroll, Link } from 'react-scroll';
import { Link } from "react-router-dom";
import { AnimatedIconMemo } from "./components/animated-icon";
import logo from "./images/awag-logo-1.png";
import financialIcon from "./images/financial-consulting.json";
import insuranceIcon from "./images/insurance.json";
import marketingIcon from "./images/marketing.json";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Link activeClass="active" to="/financial">
            <img src={logo} className="nav-logo" alt="Logo" />
          </Link>

          <ul className="nav-items">
            <li className="nav-item dropdown">
              <Link activeClass="active" to="">
                Other Services
              </Link>
            </li>

            {/* Other services dropdown menu */}
            <div className="dropdown-menu" id="drop">
              <Link className="dm-item" activeClass="active" to="">
                <AnimatedIconMemo
                  loop={true}
                  autoplay={true}
                  iconWidth={"19rem"}
                  iconHeight={"80%"}
                  animationData={financialIcon}
                ></AnimatedIconMemo>
                Financial
              </Link>

              <Link className="dm-item" activeClass="active" to="">
                <AnimatedIconMemo
                  loop={true}
                  autoplay={true}
                  iconWidth={"19rem"}
                  iconHeight={"80%"}
                  animationData={marketingIcon}
                ></AnimatedIconMemo>
                Marketing
              </Link>

              <Link className="dm-item" activeClass="active" to="">
                <AnimatedIconMemo
                  loop={true}
                  autoplay={true}
                  iconWidth={"19rem"}
                  iconHeight={"80%"}
                  animationData={insuranceIcon}
                ></AnimatedIconMemo>
                Insurance
              </Link>
            </div>

            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact">Contact us</Link>
            </li>

            <li className="nav-item">
              <Link to="/register">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
