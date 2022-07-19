import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ booksInCart, subtotal }) => {
  console.log(`books in cart from cart component:`, booksInCart);
  return (
    <>
      <h2>Cart</h2>
      <div>
        {booksInCart.map(book => (
            <CartItem bookInfo={book} key={book.isbn13} booksInCart={booksInCart}/>
        ))}
      </div>
      <h3>Total: ${subtotal}</h3>
    </>
  )
}