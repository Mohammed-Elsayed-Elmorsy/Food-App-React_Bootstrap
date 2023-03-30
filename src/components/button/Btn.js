import './btn.css'


const Btn = ({children , style}) => {
  return (
    <button className={style?'primary':'secondry'}>
      {children}
    </button>
  )
}

export default Btn
