import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Books } from './components/Books';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';
import { Favorites } from './components/Favorites';
import './App.css';


function App() {
  //Keep track of state
  const [data, setData] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [booksInCart, setBooksInCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  //Fetch data from public api using url
  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      .then(data => setData(data.books))
  }

  //onClick function used to add book to favorites in BookItem component
  const handleAddToFavorites = (book, isFav) => {
    const isFavorite = favoriteBooks.find(favoriteBook => favoriteBook.isbn13 === book.isbn13);

    const removeFavorite = favoriteBooks.filter(favoriteBook => favoriteBook.isbn13 !== book.isbn13);

    if (!isFavorite) {
      setFavoriteBooks([...favoriteBooks, book]);
    }

    if (isFav) {
      setFavoriteBooks(removeFavorite)
    }
    console.log(`favorite books from handleAddToFavorites:`, favoriteBooks);
  }

  //onCLick function used to add book to cart in BookItem component
  const handleAddToCart = ({bookInfo}) => {
    setSubtotal(subtotal + Number(bookInfo.price.substring(1)));

    let newCart = [...booksInCart];
    let isInCart = newCart.find(book => book.isbn13 === bookInfo.isbn13);
    
    if (!isInCart) {
      isInCart = {...bookInfo, quantity: 1};
      newCart.push(isInCart);
    } else if (isInCart) {
      isInCart.quantity++;
    }
    
    setBooksInCart(newCart);
  }

  
  useEffect(fetchData, [])

  return (
    <div className="App">
      <NavBar subtotal={subtotal}/>
      <h1>Book Store</h1>
        <Routes>
          <Route path="/" element={<Books books={data} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart}/>} />
          <Route path="/cart" element={<Cart subtotal={subtotal} booksInCart={booksInCart} />} />
          <Route path="/favorites" element={<Favorites favoriteBooks={favoriteBooks} />} />
        </Routes>
    </div>
  );
}

export default App;
