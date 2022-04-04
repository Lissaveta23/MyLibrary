import './modal.css';

function ModalDelete(props) {

    return (
        <div className="modal-container" onClick={() => props.setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <p>Вы точно хотите удалить эту книгу?</p>
                <div className='modal__button-group'>
                    <button 
                        className="modal__button button-cancel"
                        onClick={() => props.setShowModal(false)}
                    >
                        Назад
                    </button>
                    <button 
                        onClick={() => props.removeBook(props.id)} 
                        className="modal__button button-delete"
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;
