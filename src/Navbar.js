import React, { Component } from 'react';
// import { animateScroll as scroll, Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from './images/awag-logo-1.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='nav' id='navbar'>
        <div className='nav-content'>
          <img src={logo} className='nav-logo' alt='Logo' />

          <ul className='nav-items'>
            <li className='nav-item'>
              <Link to='/blog'>
                Other Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/blog'>
                Blog
              </Link>
            </li>

            <li className='nav-item'>
              <Link  to='/contact'>
                Contact us
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/register'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
