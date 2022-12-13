import "./ButtonBase.css"

const ButtonBase = (props) =>{
  return(
    <button onClick={props.onClick} className={props.className}>{props.BtnText}</button>
  )
};
export default ButtonBase;