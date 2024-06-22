import { motion } from "framer-motion"

import image1 from "../assets/img/carousel/Sala1.jpg";
import image2 from "../assets/img/carousel/Sala2.jpg";
import image3 from "../assets/img/carousel/Sala3.jpg";
import image4 from "../assets/img/carousel/Sala4.jpg";
import image5 from "../assets/img/carousel/Sala5.jpg";
import image6 from "../assets/img/carousel/Sala6.jpg";
import image7 from "../assets/img/carousel/Sala7.jpg";
import image8 from "../assets/img/carousel/Sala8.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const CarouselNew = () => {
  return (
    <motion.div className={`carousel`}>
        <motion.div className={`inner flex`}>

            {images.map(image => (
                <motion.div className={`item h-[200px] w-[400px] p-[14px]`} key={image}>
                    <img className="w-[716px] h-[477px]" src={image} alt="Salas" />

                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default CarouselNew