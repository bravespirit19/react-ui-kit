import { useState } from 'react';
import s from './Link.module.css';

const Link = ({ children, isLinkDisabled = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(isLinkDisabled)

  const getClassNames = () => {
    let classNames = ``

    if (isDisabled) classNames += ` ${s.disabled}`

    if (isHovered && !isDisabled) classNames += ` ${s.hovered}`

    if (isPressed && !isDisabled) classNames += ` ${s.pressed}`

    return classNames;
  }

  return (
    <a
      data-testid='link-elem'
      className={getClassNames()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}>
      {children}
    </a>
  )
}

export default Link;