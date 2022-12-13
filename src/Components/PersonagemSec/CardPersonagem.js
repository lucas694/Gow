import "./CardPersonagem.css"

const CardPersonagem = (props) =>{
  return(
    <div className={"CardPersonagemContainer"}>
      <div className={"secImg"}>
        <img src={props.img} alt={""} className={"CardImg"}/>
      </div>
      <div className={"secText"}>
        <h1 className={"CardPersTittle"}>{props.name}</h1>
      </div>
    </div>
  )
};export default CardPersonagem;