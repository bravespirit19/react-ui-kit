import { useState } from 'react';
import s from './SelectMenu.module.css';

const SelectMenu = ({ title, options }) => {
  if (!options || options.length === 0) throw new Error('dropdown reqiures at least one option')

  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [selectValue, setSecelctValue] = useState('');

  const handleSelectClick = () => {
    isOptionsVisible ? setIsOptionsVisible(false) : setIsOptionsVisible(true);
  }
  const handleOptionClick = (value) => {
    setIsOptionsVisible(false);
    setSecelctValue(value)
  }
  return (
    <div className={s.select_wrap}>
      <div className={s.select_title}>{title}</div>
      <div className={s.select} onClick={handleSelectClick} data-testid='select-elem'>
        <div className={s.select_value} data-testid='select-placeholder'>{selectValue}</div>
        <div className={s.options_wrap} style={{ display: isOptionsVisible ? 'block' : 'none' }} data-testid='options-wrap-elem'>
          {options.map((item, index) => {
            return <div
              data-testid={'option-' + index}
              key={index}
              className={s.select_option}
              onClick={() => { handleOptionClick(item) }}
              style={{ background: selectValue === item && '#e3e3e3' }}>
              {item}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default SelectMenu;