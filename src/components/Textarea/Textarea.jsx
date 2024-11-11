import s from './Textarea.module.css';

const Textarea = ({ title, children }) => {

  return (
    <div className={s.textarea_wrap}>
      <div className={s.textarea_title}>{title}</div>
      <div
        data-testid='textarea-elem'
        className={s.textarea}
        contentEditable='true'>
          {children}</div>
    </div>
  )
}

export default Textarea;