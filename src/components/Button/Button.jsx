import { useState } from 'react';
import s from './Button.module.css';

const Button = ({ children, styleName, isBtnDisabled = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(isBtnDisabled);

  const getClassNames = () => {
    let classNames = `${s[styleName]}`;
    
    if (isDisabled) classNames += ` ${s[`${styleName}_disabled`]}`

    if (isHovered && !isDisabled) classNames += ` ${s[`${styleName}_hovered`]}`

    if (isPressed && !isDisabled) classNames += ` ${s[`${styleName}_pressed`]}`

    return classNames;
  }

  return (
    <button
      data-testid='button-elem'
      className={getClassNames()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}>
      {children}
    </button>
  )
}

export default Button;