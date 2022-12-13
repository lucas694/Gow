import "./Main.css"
import ButtonBase from "./Buttons/ButtonBase";
import KratosAtreus from "../Assets/KratosAtreus.png";


const Main = () => {
  return (
    <div className={"MainContainer"}>
      <div className={"MainContent"}>
        <div className={"MainLeft"}>
          <div className={"MainTextSection"}>
            <h1 className={"MainTittle"}>UM MUNDO MAIS SOMBRIO E PRIMITIVO</h1>
            <p className={"MainDesc"}>Do mármore e colunas ornadas do Ólimpo para as florestas, este é um reino novo, com suas próprias espécies de criaturas, monstros e deuses</p>
          </div>
          <div className={"MainButtonsSection"}>
            <ButtonBase BtnText={"Compre Agora"}
                        className={"BtnBlue"}/>
            <ButtonBase BtnText={"Saiba Mais"}
                        className={"BtnTransparent"}/>
          </div>
        </div>

        <div className={"MainRight"}>
          <img src={KratosAtreus} alt="Kratos e Atreus" className={"MainImg"}/>
        </div>
      </div>
    </div>
  )
}
export default Main;