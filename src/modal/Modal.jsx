import { useState } from 'react';
import './modal.css';

function Modal(props) {
    const [id, setID] = useState(props.book?.id);
    const [title, setTitle] = useState(props.book?.title);
    const [author, setAuthor] = useState(props.book?.author);
    const [pages, setPages] = useState(props.book?.pages);
    const [year, setYear] = useState(props.book?.year);

    const addBook = () => {
        if(!title || !author || !id) {
            alert("Заполните поля");
        }
        else {
            const newBook = {id: id, title: title, author: author, pages: pages, year: year};
            props.addBook(newBook);
            props.setshowModal(false);
        }
    }

    return (
        <div className="modal-container" onClick={() => props.setshowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal__content-item'> ID:
                    <input 
                        className='content-item__field' 
                        type="number" 
                        onChange={ e => setID(e.target.value)} 
                        value={id || ""}
                    />
                </div>
                <div className='modal__content-item'> Название книги:
                    <input 
                        className='content-item__field' 
                        type="text" 
                        onChange={ e => setTitle(e.target.value)} 
                        value={title || ""}
                    />
                </div>
                <div className='modal__content-item'> Автор:
                    <input 
                        className='content-item__field' 
                        type="text" 
                        onChange={ e => setAuthor(e.target.value)} 
                        value={author || ""}
                    />
                </div>
                <div className='modal__content-item'> Год написания:
                    <input 
                        className='content-item__field' 
                        type="number" 
                        onChange={ e => setYear(e.target.value)} 
                        value={year || ""}
                    />
                </div>
                <div className='modal__content-item'> Количество страниц:
                    <input 
                        className='content-item__field' 
                        type="number" 
                        onChange={ e => setPages(e.target.value)} 
                        value={pages || ""}
                    />
                </div>
                <button className='modal__button' onClick={() => addBook()}> 
                    Сохранить 
                </button>
            </div>
        </div>
    );
}

export default Modal;
