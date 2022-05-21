import React, { Component } from 'react';

export default class BtnNavbar extends Component {
  render() {
    return (
      <div class="btn-nav">
      <button class="nav-trigger">
          {/* icon */}
      </button>

      <div class="btn-nav-items">
         <div class="btn-nav-item">item1</div>

         <div class="btn-nav-item">item2</div>

         <div class="btn-nav-item">item3</div>
         
         <div class="btn-nav-item">item4</div>
      </div>
   </div>

    );
  }
}
