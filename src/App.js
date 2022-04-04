import './App.css';
import Bookshelf from './shelf/Bookshelf';
import InformationBook from './informationBook/InformationBook';
import { useState } from 'react';
import Modal from './modal/Modal';
import {sortBooks, dataBooks, addUpdateBook, removeBook} from './service'

function App() {
  const [currentBook, setCurrentBook] = useState();
  const [books, setBooks] = useState(dataBooks);
  const [showModal, setshowModal] = useState(false);
  const [sortedBooks, setSortedBooks] = useState([]);

  const showInfo = (value) => {
    setCurrentBook(value);
  }

  const sortingBooks = (e) =>{
    const newBooks = [...books];
    sortBooks(e, newBooks);
    setSortedBooks(newBooks);
  }
  
  const addUpdateBooks = (newBook) => {
    const newArray = addUpdateBook(newBook, books);
    setSortedBooks([]);
    setCurrentBook(newBook);
    setBooks(newArray);
  }

  const deleteBook = (id) => {
    const newArray = removeBook(id, books);
    setCurrentBook();
    setBooks(newArray);
  }

  return (
    <div className="App"> 
      <div className="container">
        <div className="container-catalog">
          <div className='container__column column-right'> 
            <div className="column-right__header">
              <div className="header__sort-container">
                <span className="sort-text">Сортировать по:</span> 
                  <ul className="sort-menu">
                    <li className="sort-item">
                      <a 
                        name="titleBook" 
                        onClick={(e) => sortingBooks(e)} 
                        className="sort-link" 
                        href=''
                      > 
                        Названию книги
                      </a>
                    </li>
                    <li className="sort-item">
                      <a 
                        name="authorBook"
                        onClick={(e) => sortingBooks(e)} 
                        className="sort-link" 
                        href=''
                      >
                        Автору
                      </a>
                    </li>
                  </ul>
                  <button 
                    className="header__button reset" 
                    onClick={() => setSortedBooks([])}
                  >
                    сбросить
                  </button>
              </div>
              <button 
                className="header__button addBook" 
                onClick={() =>  setshowModal(true)}
              >
                Добавить новую книгу
              </button>
            </div>     
            <Bookshelf 
              books={sortedBooks.length !== 0 ? sortedBooks : books} 
              currentBook={currentBook} 
              showInfo={showInfo}
            />
        </div>
          { 
            currentBook &&
              <div className='container__column'>
                <InformationBook 
                  removeBook={deleteBook} 
                  addBook={addUpdateBooks} 
                  book={currentBook}
                /> 
              </div>
          }
          {
            showModal ?
              <Modal addBook={addUpdateBooks} setshowModal={setshowModal}/> 
              : null         
          }
        </div>
      </div>
    </div>
  );
}

export default App;
