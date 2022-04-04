import './informationBook.css';
import { useState } from 'react';
import Modal from '../modal/Modal';
import ModalDelete from '../modal/ModalDelete';

function InformationBook(props) {
    const [showModal, setshowModal] = useState(false);
    const [showModalDeleteBook, setShowModalDeleteBook] = useState(false);

    return (
        <div className="information-block">
            <div className="information-block__container">
                <p className='information-block__title'>Информация о книге</p>
                { props.book && 
                    <div className="information-container__text">
                        <div className="information-container__row">   
                            <p className='information__sub-title'> Название книги:</p>
                            <p className='information__book-property'>
                                {props.book?.title}
                            </p>
                        </div>
                        <div className="information-container__row">   
                            <p className='information__sub-title'>Автор:</p>
                            <p className='information__book-property'>
                                {props.book?.author}
                            </p>
                        </div>
                        <div className="information-container__row">   
                            <p className='information__sub-title'>Год написания:</p>
                            <p className='information__book-property'>
                                {props.book?.year}
                            </p>
                        </div>
                        <div className="information-container__row">   
                            <p className='information__sub-title'>Количество страниц:</p>
                            <p className='information__book-property'>
                                {props.book?.pages}
                            </p>
                        </div>
                    </div>
                } 
                <div className="information__button-group">
                    <button 
                        className='information__button button-edit' 
                        onClick={() => setshowModal(true)}
                    > 
                        Редактировать
                    </button>
                    <button 
                        className='information__button button-delete' 
                        onClick={() => setShowModalDeleteBook(true)}
                    > 
                        Удалить
                    </button>
                </div>
            </div>
            {
                showModal ? 
                <Modal 
                    setshowModal={setshowModal} 
                    book={props.book} 
                    addBook={props.addBook}
                /> 
                : null          
            }
            {
                showModalDeleteBook ? 
                <ModalDelete 
                    setShowModal={setShowModalDeleteBook} 
                    removeBook={props.removeBook} 
                    id={props.book.id}
                /> 
                : null          
            }
        </div>
    );
}

export default InformationBook;
