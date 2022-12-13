import "./CarroselPersonagens.css"
import React from "react";
import Slider from "react-slick";
import CardPersonagem from "./CardPersonagem";
import Kratos from "../../Assets/kratos.png";
import Atreus from "../../Assets/atreus.png";
import Angrboda from "../../Assets/angrboda.png";
import Freya from "../../Assets/freya.png";



const CarroselPersonagens = () => {
  const personagens = [
    {name: "Kratos", img: Kratos},
    {name: "Atreus", img: Atreus},
    {name: "Angrboda", img: Angrboda},
    {name: "Freya", img: Freya},
  ]
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
