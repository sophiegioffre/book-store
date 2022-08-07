import React from "react";
import { FavoriteItem } from "./FavoriteItem";

export const Favorites = ({ favoriteBooks, handleAddToCart }) => {
  return (
    <div className='book-container'>
      {favoriteBooks?.map(favoriteBook => (
        <FavoriteItem key={favoriteBook.isbn13} favoriteBook={favoriteBook}  handleAddToCart={handleAddToCart}/>
      ))}
    </div>
  )
}