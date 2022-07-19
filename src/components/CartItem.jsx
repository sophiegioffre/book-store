import { useState } from "react"

export const CartItem = ({ bookInfo, booksInCart }) => {

  return (
    <div className="cart-item">
      <img alt={bookInfo.title} src={bookInfo.image}/>
      <h3>{bookInfo.title}</h3>
      <p>{bookInfo.price}</p>
    </div>
  )
}