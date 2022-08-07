import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ booksInCart, subtotal }) => {
  return (
    <React.Fragment>
      <h2>Cart</h2>
      <div>
        {booksInCart.map(book => (
            <CartItem bookInfo={book} key={book.isbn13}/>
        ))}
      </div>
      <h3>Total: ${subtotal}</h3>
    </React.Fragment>
  )
}