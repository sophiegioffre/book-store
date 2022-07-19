import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Books } from './components/Books';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart';

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
  const handleAddToFavorites = (book) => {
    setFavoriteBooks([...favoriteBooks, book]);
  }

  //onCLick function used to add book to cart in BookItem component
  const handleAddToCart = ({bookInfo}) => {
    setSubtotal(subtotal + Number(bookInfo.price.substring(1)));

    console.log('bookPrice:', bookInfo.price.substring(1));

    let newCart = [...booksInCart];
    console.log('newCart:', newCart);
    let isInCart = newCart.find(book => book.isbn13 === bookInfo.isbn13);
    if (!isInCart) {
      isInCart = {...bookInfo, quantity: 1};
      newCart.push(isInCart);
    } else if (isInCart) {
      isInCart.quantity++;
    }
    
    setBooksInCart(newCart);
  }

  console.log('>>>>>>>', booksInCart);

  
  useEffect(fetchData, [])

  return (
    <div className="App">
      <NavBar subtotal={subtotal}/>
      <h1>Book Store</h1>
      <Routes>
        <Route path="/" element={<Books books={data} handleAddToFavorites={handleAddToFavorites} handleAddToCart={handleAddToCart} />} />
        <Route path='/cart' element={<Cart subtotal={subtotal} booksInCart={booksInCart} />} />
      </Routes>

    </div>
  );
}

export default App;
