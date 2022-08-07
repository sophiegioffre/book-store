import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ subtotal }) => {
  return (
    <React.Fragment>
      <div className="routes">
        <Link to='/'>
          <h3>Home</h3>
        </Link>
        <Link to='/favorites'>
          <h3>Favorites</h3>
        </Link>
      </div>
      <div id="cart-link">
        <Link to='/cart'>
          <h3>Cart: ${subtotal.toFixed(2)}</h3>
        </Link>
      </div>
    </React.Fragment>
  )
}