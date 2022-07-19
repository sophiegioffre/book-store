import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ subtotal }) => {
  return (
    <>
      <div className="routes">
        <Link to='/'>
          <h2>Home</h2>
        </Link>
        <Link to='/favorites'>
          <h2>Favorites</h2>
        </Link>
      </div>
      <div id="cart-link">
        <Link to='/cart'>
          <h2>Cart: ${subtotal.toFixed(2)}</h2>
        </Link>
      </div>
    </>
  )
}