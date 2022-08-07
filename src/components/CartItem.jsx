import React from "react"

export const CartItem = ({ bookInfo }) => {

  return (
    <div className="book-item">
      <img alt={bookInfo.title} src={bookInfo.image}/>
      <h3>{bookInfo.title}</h3>
      <p>{bookInfo.price}</p>
    </div>
  )
}