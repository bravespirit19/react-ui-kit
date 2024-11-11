import { useState } from 'react';
import s from './Checkbox.module.css';

const Checkbox = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkboxId = Math.random().toString(36).slice(2, 11);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className={s.checkbox_wrap}>
      <input
        data-testid="checkbox-elem"
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onClick={handleCheckboxChange} />
      {children && <label data-testid='checkbox-label-elem' htmlFor="checkbox" className={s.checkbox_label} onClick={handleCheckboxChange}>{children}</label>}
    </div>
  )
}

export default Checkbox;
