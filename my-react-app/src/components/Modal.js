import './Modal.css'
import ReactDOM from 'react';

export default function Modal( {children, handleClose} ) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleClose} >close</button>
        </div>
    </div>
  ), document.body)
}