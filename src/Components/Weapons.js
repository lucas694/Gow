import "./Weapons.css"
import Machado from "../Assets/machado.png"
import Arco from "../Assets/flecha.png"
import ButtonBase from "./Buttons/ButtonBase";

const Weapons = () => {
  return(
    <div className={"WeaponsContainer"}>
      <h1 className={"WeaponsSecTittle"}>ARMAS LENDÁRIAS</h1>
      <div className={"WeaponsContent"}>

        <div className={"WeaponsLeft"}>
          <div className={"WeaponTextSec"}>
            <h1 className={"WeaponTittle"}>PODER RÚNICO REFINADO</h1>
            <p className={"WeaponDescript"}>Novas habilidades permitem que kratos use seu machado de maneira inéditas</p>
            <ButtonBase BtnText={"SAIBA MAIS"}
                        className={"BtnBlue"}/>
          </div>
          <div className={"WeaponImgSec"}>
            <img src={Machado} alt={"Machado runico de gelo"} className={"WeaponImg"}/>
          </div>
        </div>

        <div className={"WeaponsRight"}>
          <div className={"WeaponTextSec"}>
            <h1 className={"WeaponTittle"}>MAIS DO QUE UM GAROTO DE ARCO</h1>
            <p className={"WeaponDescript"}>Atreus aprimorou suas habilidades  de arquearia para desferir novos ataques</p>
            <ButtonBase BtnText={"SAIBA MAIS"}
                        className={"BtnBlue"}/>
          </div>
          <div className={"WeaponImgSec"}>
            <img src={Arco} alt={"Arco"} className={"WeaponImg"}/>
          </div>
        </div>
      </div>
    </div>
  )
} ;export default Weapons;