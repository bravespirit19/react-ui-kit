import { useState } from 'react';
import s from './InputField.module.css';

const InputField = ({ title, placeholder, type = 'text', isInputDisabled = false, isErrors = false }) => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState(isErrors);
  const [isDisabled, setIsDisabled] = useState(isInputDisabled);
  const [isEyeClosed, setIsEyeClosed] = useState(true);

  const eyeIconSrc = isDisabled ? '/input-eye-disabled.svg' : isEyeClosed ? '/input-eye-closed.svg' : '/input-eye-open.svg';

  const onEyeClick = () => {
    if (isDisabled) return;
    setIsEyeClosed(!isEyeClosed)
  }


  return (
    <div className={`${s.input_wrap} ${isDisabled && s.disabled}`}>
      <label htmlFor='input'>{title}</label>
      <input
        data-testid="input-field-elem"
        type={type === 'password' && !isEyeClosed ? 'text' : type}
        name='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{ borderBottom: errors && '1px solid #ff5620' }}
        disabled={isDisabled} />
      {type === 'password' && (
        <img
          src={eyeIconSrc} alt='icon'
          onClick={onEyeClick}
          style={{ cursor: isDisabled && 'default' }} />
      )}
      {errors && <span data-testid='input-error-elem'>Error message</span>}
    </div>
  )
}

export default InputField;