import { useState } from 'react';
import s from './ColorPicker.module.css';
import Color from './Color/Color';

const colors = ['#9f2957', '#d90056', '#e25d33', '#dfc45a', '#b8c42f', '#16af6e', '#429488', '#397e49', '#439bdf', '#4254af', '#6c7ac4', '#8332a4']

console.log(colors.slice(0,6));

const ColorPicker = () => {
  const [activeColor, setActiveColor] = useState('')
  const handleColorClick = (color) => {
    setActiveColor(color)
  }
  
  return (
    <div className={s.color_picker} data-testid="color-picker">
      <div className={s.title}>Color</div>
      <div className={s.colors_wrap}>
        <div className={s.colors_row}>
          {colors.slice(0, 6).map((item,index) => {
            return <Color key={index} color={item} testid={'color-' + index} onClick={handleColorClick} isActive={item === activeColor} />
          })}
        </div>
        <div className={s.colors_row}>
        {colors.slice(6, 12).map((item,index) => {
            return <Color key={index} color={item} testid={'color-' + index+6} onClick={handleColorClick} isActive={item === activeColor} />
          })}
        </div>
      </div>
    </div>
  )
}

export default ColorPicker;