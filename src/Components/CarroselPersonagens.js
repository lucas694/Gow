import "./CarroselPersonagens.css"
import React from "react";
import Slider from "react-slick";
import CardPersonagem from "./CardPersonagem";
import Kratos from "../Assets/kratos.png";
import Atreus from "../Assets/atreus.png";
import Angrboda from "../Assets/angrboda.png";
import Freya from "../Assets/freya.png";



const CarroselPersonagens = () => {
  const personagens = [
    {name: "Kratos", img: Kratos},
    {name: "Atreus", img: Atreus},
    {name: "Angrboda", img: Angrboda},
    {name: "Freya", img: Freya},
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={"SliderContainer"}>
      <Slider {...settings} className={"slider"}>
        {personagens.map((personagem) => {
          return <CardPersonagem name={personagem.name} img={personagem.img}/>
        })}
      </Slider>
    </div>
  )
}; export default CarroselPersonagens;