import { useState } from 'react';
import s from './Modal.module.css';

const Modal = ({ title, children }) => {
  const [isClosed, setIsClosed] = useState(false);
  const handleModalClose = () => {
    setIsClosed(true);
  }
  return (
    <div className={s.modal} data-testid='modal-elem' style={{ display: isClosed ? 'none' : 'block' }}>
      <div className={s.modal_header}>
        <div className={s.modal_title} >{title}</div>
        <img src="/close.svg" alt="close-modal" className={s.modal_close} onClick={handleModalClose} />
      </div>
      <div className={s.modal_desc}>
        {children}
      </div>
    </div>
  )
}

export default Modal;