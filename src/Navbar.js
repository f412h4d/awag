import React, { Component } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import logo from './images/awag-logo.jpeg';

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className='nav' id='navbar'>
        <div className='nav-content'>
          <img src={logo} className='nav-logo' alt='Logo' onClick={this.scrollToTop} />
          AWAG Holding
          <ul className='nav-items'>
            <li className='nav-item'>
              <Link
                activeClass='active'
                to='investment'
                spy={true}
                smooth={true}
                offset={-110}
                duration={700}
              >
                Investment
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                activeClass='active'
                to='insurance'
                spy={true}
                smooth={true}
                offset={-50}
                duration={700}
              >
                Insurance
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                activeClass='active'
                to='marketing'
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Marketing
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                activeClass='active'
                to='financial-services'
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                Financial Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
