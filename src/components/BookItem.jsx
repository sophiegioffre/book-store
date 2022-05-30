import { useState } from "react"

export const BookItem = ({ bookInfo, handleAddToFavorites, handleAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    console.log(bookInfo);
    handleAddToFavorites(bookInfo)
  }

  return (
    <div className="book-item">
      <p onClick={handleClick} className="favorite-button">{isFavorite ? '💖' : '🤍'}</p>
      <img alt={bookInfo.title} src={bookInfo.image}/>
      <h3>{bookInfo.title}</h3>
      <p>{bookInfo.price}</p>
      <button onClick={() => handleAddToCart(bookInfo.price)}>Add to Cart</button>
    </div>
  )
}