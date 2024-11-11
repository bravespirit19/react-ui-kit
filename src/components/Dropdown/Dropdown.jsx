import { useState } from 'react';
import s from './Dropdown.module.css';

const Dropdown = ({ options }) => {
  if(!options || options.length === 0) throw new Error('dropdown reqiures at least one option')

  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    if (isOptionsVisible) {
      setIsOptionsVisible(false);
      setIsActive(false);
    } else {
      setIsOptionsVisible(true);
      setIsActive(true);
    }
  }
  const handleOptionClick = (value) => {
    setIsOptionsVisible(false);
    setDropdownValue(value)
    setIsActive(false)
  }
    
  return (
    <div className={s.dropdown_wrap}>
      <div className={s.dropdown} data-testid="dropdown-elem" onClick={handleDropdownClick} style={{background: isActive ? '#e0e0e0' : ''}}>
        <div className={s.placeholder}>
          <div className={s.value} data-testid='dropdown-placeholder'>{dropdownValue}</div>
          <img src="/down-small.svg" alt="arrow" />
        </div>
        <div className={s.options_wrap} data-testid="options-wrap-elem" style={{ display: isOptionsVisible ? 'block' : 'none' }}>
          {options.map((item, index) => {
            return <div
              data-testid={'option-' + index}
              key={index}
              className={s.option}
              onClick={() => { handleOptionClick(item) }}
              style={{ background: dropdownValue === item && '#e3e3e3' }}>
              {item}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Dropdown;