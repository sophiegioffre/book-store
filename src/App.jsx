import './App.css';
import { useEffect, useState } from 'react';
import { BookItem } from './components/BookItem';
import { NavBar } from './components/NavBar';

function App() {
  //Keep track of state
  const [data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  //Fetch data from public api using url
  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      .then(data => setData(data.books))
  }

  //onClick function used to add book to favorites in BookItem component
  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  }

  //onCLick function used to add book to cart in BookItem component
  const handleAddToCart = (bookPrice) => {
    setSubtotal(subtotal + Number(bookPrice.substring(1)));
    console.log('bookPrice:', bookPrice.substring(1));
  }

  
  useEffect(fetchData, [])

  return (
    <div className="App">
      <NavBar subtotal={subtotal}/>
      <h1>Book Store</h1>
      <div className="book-container">
        {data.map(book => (
          <BookItem key={book.isbn13} bookInfo={book} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  );
}

export default App;
