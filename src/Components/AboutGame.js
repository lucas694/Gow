import "./AboutGame.css"
import AboutImg1 from "../Assets/AboutImg1.png"
import AboutImg2 from "../Assets/AboutImg2.png"
import AboutImg3 from "../Assets/AboutImg3.png"

const AboutGame = () => {
  return(
    <div className={"AboutGameContainer"}>
      <div className={"AboutLeft"}>
        <img src={AboutImg1} alt={""} className={"AboutImg"}/>
        <img src={AboutImg2} alt={""} className={"AboutImg"}/>
        <img src={AboutImg3} alt={""} className={"AboutImg"}/>
      </div>
      <div className={"AboutRight"}>
        <h1 className={"AboutTittle"}>LUTE NO REINO NÓRDICO</h1>
        <p className={"AboutDescript"}>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. </p>
        <p className={"AboutDescript"}>É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo. </p>
      </div>
    </div>
  )
}; export default AboutGame;