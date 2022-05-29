import './App.css';
import { useEffect, useState } from 'react';
import { BookItem } from './components/BookItem';

function App() {
  //Keep track of state for data
  const [data, setData] = useState([]);

  //Fetch data from public api using url
  const fetchData = () => {
    fetch('https://api.itbook.store/1.0/new')
      .then(res => res.json())
      .then(data => setData(data.books))
  }

  useEffect(fetchData, [])

  return (
    <div className="App">
      <h1>Book Store</h1>
      {data.map(book => (
        <BookItem key={book.isbn13} title={book.title} price={book.price} image={book.image} />
      ))}
    </div>
  );
}

export default App;
