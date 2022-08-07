import { BookItem } from './BookItem';

export const Books = ({ books, handleAddToCart, handleAddToFavorites }) => {
  return (
    <div className='book-container'>
        {books?.map(book => (
          <BookItem key={book.isbn13} bookInfo={book} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart}/>
        ))}
    </div>
  )
}