import "./Header.css"
import GowLogo from "../Assets/Gow-Logo.png";
import Vector from "../Assets/Vector.png";
import { FaBars } from "react-icons/fa";
import {useState} from "react";


const Header = () =>{
  const[isOpen, setIsOpen] = useState(true);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <div>
          <img src={GowLogo} alt="Gow Logo" className="HeaderLogo"/>
        </div>
        <div>
          <img src={Vector} alt="Vector" className="VectorLogo"/>
        </div>
        <div>
          <ul className={"UlHeader"}>
            <li className={"LiHeader"}>VÍDEOS E TELAS</li>
            <li className={"LiHeader"}>BASTIDORES</li>
            <li className={"LiHeader"}>COMUNIDADE</li>
            <li className={"LiHeader"}>COMPRE AGORA</li>
          </ul>
        </div>

        <button onClick={toggle} className={"ButtonMobile"}>
          <FaBars/>
        </button>
        <div className={isOpen ? "MenuIconOpen" : "MenuIconClose"}>
          <ul className={"UlHeaderMobile"}>
            <li className={"LiHeaderMobile"}>VÍDEOS E TELAS</li>
            <li className={"LiHeaderMobile"}>BASTIDORES</li>
            <li className={"LiHeaderMobile"}>COMUNIDADE</li>
            <li className={"LiHeaderMobile"}>COMPRE AGORA</li>
          </ul>
        </div>
        </div>
    </div>
  )
}; export default Header;
