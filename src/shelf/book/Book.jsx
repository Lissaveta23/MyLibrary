import React from 'react';
import './book.css';

function Book(props) {
  const bookRef = React.createRef();

  const showInfo = (e) => {
    const activeBook = document.querySelector('.container-book-open');
    if(activeBook){
      activeBook.classList.remove('container-book-open');
    } 
    if (e.currentTarget === activeBook){
      props.showInfo();
      return;
    }
    bookRef.current.classList.add('container-book-open');
    props.showInfo(props.book);
  }

  return (
    <div ref={bookRef} className="container-book" onClick={(e) => showInfo(e)}>
      <div className="back side"/>
      <div className="left side">
        <p className='book-title left__book-property'> 
          {props.book.title}
        </p>
        <p className='book-author left__book-property'> 
          {props.book.author}
        </p>
      </div>
      <div className="right side"/>
      <div className="top side"/>
      <div className="bottom side"/>
      <div className="front side">
        <p className='front__book-property'> 
          {props.book.title}
        </p>
        <hr className='border'/>
        <p className='front__book-property'> 
          {props.book.author}
        </p>
      </div>
    </div>
  );
}

export default Book;
