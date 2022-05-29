import React, { Component } from 'react';
// import { animateScroll as scroll, Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from './images/awag-logo-1.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='nav' id='navbar'>
        <div className='nav-content'>
          <Link activeClass='active' to='/financial'>
            <img src={logo} className='nav-logo' alt='Logo' />
          </Link>

          <ul className='nav-items'>
            <li className='nav-item dropdown'>
              <Link activeClass='active' to=''>
                Other Services
              </Link>

              <div className='dropdown-menu'>
                <Link className='dm-item' activeClass='active' to=''>
                  <img
                    src='https://via.placeholder.com/300'
                    alt=''
                    className='dm-item-img'
                  />

                  <h1 className='dm-item-title'>Item Name</h1>
                </Link>

                <Link className='dm-item' activeClass='active' to=''>
                  <img
                    src='https://via.placeholder.com/300'
                    alt=''
                    className='dm-item-img'
                  />

                  <h1 className='dm-item-title'>Item Name</h1>
                </Link>

                <Link className='dm-item' activeClass='active' to=''>
                  <img
                    src='https://via.placeholder.com/300'
                    alt=''
                    className='dm-item-img'
                  />

                  <h1 className='dm-item-title'>Item Name</h1>
                </Link>
              </div>
            </li>

            <li className='nav-item'>
              <Link to='/blog'>Blog</Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact'>Contact us</Link>
            </li>

            <li className='nav-item'>
              <Link to='/register'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
