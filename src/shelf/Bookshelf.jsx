import './bookshelf.css';
import Book from "./book/Book"
import { useEffect, useState } from 'react';
import {separatorBooks} from '../service'

function Bookshelf(props) {
    const [copyBook, setCopyBook] = useState([]);

    useEffect(() => {
        const newArray = separatorBooks(props.books);
        setCopyBook(newArray);
    }, [props.books]);

    return (
        <div className="shelfs-container">
            {
                copyBook.map((books) => {
                    return (
                        <div className="bookshelfs">
                            <div className="books">
                                {
                                    books.map((book)=>
                                        <Book showInfo={props.showInfo} book={book} key={book.id}/>
                                    )
                                }
                            </div>
                            <div className="shelf"/>
                        </div>   
                    )
                })
            }
        </div>
        
    );
}

export default Bookshelf;
