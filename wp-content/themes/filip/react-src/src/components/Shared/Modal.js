import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onClose, openClass, children, style }) => {

    return (
        ReactDOM.createPortal(<div className="modal__overlay" onClick={onClose} >
            <div className={`modal ${openClass}`} style={style} onClick={e => { e.stopPropagation() }}>
                <div className="modal-footer">
                    <i onClick={onClose} className="material-icons"> close </i>
                </div>
                <div className="modal-content">
                    { children }
                </div>

            </div>
        </div>, document.querySelector('#modal'))

    );

};

export default Modal;
