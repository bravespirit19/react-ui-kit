import s from './Color.module.css'

const Color = ({ color, onClick, isActive, testid }) => {
  const handleClick = () => {
    onClick(color)
  }
  
  return (
    <div
      data-testid={testid}
      className={s.color}
      style={{ backgroundColor: color, boxShadow: isActive ? '0 0 0 1px #fff, 0 0 0 2px #323749' : 'none'}}
      onClick={handleClick}
    />
  )
}

export default Color;