import { useState } from 'react';
import s from './Toast.module.css';

const Toast = () => {
  const [isClosed, setIsClosed] = useState(false);
  const handleToastClose = () => {
    setIsClosed(true);
  }
  return (
    <div data-testid='toast-elem' className={s.toast} style={{ display: isClosed ? 'none' : 'flex' }}>
      <div className={s.toast_title}>Event deleted</div>
      <img src="/close.svg" alt="close" onClick={handleToastClose}/>
    </div>
  )
}

export default Toast;