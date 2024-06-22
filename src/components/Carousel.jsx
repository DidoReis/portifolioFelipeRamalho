import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Sala1 from "../assets/img/carousel/Sala1.jpg";
import Sala2 from "../assets/img/carousel/Sala2.jpg";
import Sala3 from "../assets/img/carousel/Sala3.jpg";
import Sala4 from "../assets/img/carousel/Sala4.jpg";
import Sala5 from "../assets/img/carousel/Sala5.jpg";
import Sala6 from "../assets/img/carousel/Sala6.jpg";
import Sala7 from "../assets/img/carousel/Sala7.jpg";
import Sala8 from "../assets/img/carousel/Sala8.jpg";
import Cozinha1 from "../assets/img/carousel/Cozinha1.jpg";
import Cozinha2 from "../assets/img/carousel/Cozinha2.jpg";
import Cozinha3 from "../assets/img/carousel/Cozinha3.jpg";
import Cozinha4 from "../assets/img/carousel/Cozinha4.jpg";
import Cozinha5 from "../assets/img/carousel/Cozinha5.jpg";
import Quarto1 from "../assets/img/carousel/Quarto1.jpg";
import Quarto2 from "../assets/img/carousel/Quarto2.jpg";
import Quarto3 from "../assets/img/carousel/Quarto3.jpg";
import Quarto4 from "../assets/img/carousel/Quarto4.jpg";
import Banheiro1 from "../assets/img/carousel/Banheiro1.jpg";
import Banheiro2 from "../assets/img/carousel/Banheiro2.jpg";
import Banheiro3 from "../assets/img/carousel/Banheiro3.jpg";
import Banheiro4 from "../assets/img/carousel/Banheiro4.jpg";
import Fachada from "../assets/img/carousel/Fachada.jpg";
import VarandaGourmet from "../assets/img/carousel/VarandaGourmet.jpg";

// Definindo um array com todas as imagens
const images = [
  Fachada, Sala1, Sala2, Sala3, Sala4, Sala5, Sala6, Sala7, Sala8,
  Cozinha1, Cozinha2, Cozinha3, Cozinha4, Cozinha5,
  Quarto1, Quarto2, Quarto3, Quarto4,
  Banheiro1, Banheiro2, Banheiro3, Banheiro4,
  VarandaGourmet
];

const imageLabels = [
  "Fachada", "Salas", "Salas", "Salas", "Salas", "Salas", "Salas", "Salas", "Salas",
  "Cozinhas", "Cozinhas", "Cozinhas", "Cozinhas", "Cozinhas",
  "Quartos", "Quartos", "Quartos", "Quartos",
  "Banheiros", "Banheiros", "Banheiros", "Banheiros",
  "Varanda Gourmet"
];

const Carousel = () => {
  const carousel = useRef(); // Usando useRef para criar uma referência ao contêiner do carrossel
  const scrollSpeed = 3; // Fator de velocidade da rolagem
  const [isHovering, setIsHovering] = useState(false); // Usando useState para gerenciar o estado de hover
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const handleScroll = (event) => {
      if (carousel.current) {
        event.preventDefault();
        carousel.current.scrollLeft += event.deltaY * scrollSpeed;
      }
    };

    if (carousel.current) {
      carousel.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (carousel.current) {
        carousel.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (carousel.current) {
      setDragConstraints({
        right: 0,
        left: -(carousel.current.scrollWidth - carousel.current.offsetWidth),
      });
    }
  }, [carousel.current?.scrollWidth, carousel.current?.offsetWidth]);

  return (
    <div
      ref={carousel} // Atribuindo a referência ao contêiner principal
      className="carousel w-full h-[478px] mt-[273px] ml-[15px] flex overflow-x-hidden overflow-y-hidden cursor-grab relative"
      onMouseEnter={() => setIsHovering(true)} // Atualizando o estado ao entrar com o mouse
      onMouseLeave={() => setIsHovering(false)} // Atualizando o estado ao sair com o mouse
    >
      <motion.div
        className="inner flex gap-4" // Contêiner interno para as imagens
        drag="x" // Permite arrastar horizontalmente
        dragConstraints={dragConstraints} // Define os limites do arrasto
        whileTap={{ cursor: 'grabbing' }} // Cursor muda para "grabbing" ao clicar e arrastar
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`min-w-[calc(100vw-30px)] h-[477px] relative ${index === images.length - 1 ? 'mr-[15px]' : ''}`}
          >
            <img className="w-full h-full object-cover pointer-events-none" src={image} alt={`Foto da Sala ${index + 1}`} />
            <label className="absolute top-[420px] left-4 text-white font-bold text-lg bg-black bg-opacity-40 p-2 rounded shadow-lg">{imageLabels[index]}</label>
          </motion.div>
        ))}
      </motion.div>
      {isHovering && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <p className="bg-black bg-opacity-50 text-white p-2 rounded">Scroll or Grab to navigate</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
