import "./Personagens.css"
import CarroselPersonagens from "./CarroselPersonagens";

const Personagens = () =>{
  return(
    <div className={"PersonagensContainer"}>
      <h1 className={"PersonTittle"}>Personagens</h1>
      <CarroselPersonagens/>
    </div>
  )
};
export default Personagens;