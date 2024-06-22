// About.js
import { motion } from 'framer-motion';
import FelipePic from "../assets/img/carousel/felipe.png";
import Email from "../assets/img/email.png";
import Whatsapp from "../assets/img/whats.png";
import Instagram from "../assets/img/instagram.png";

const About = () => {
  return (
    <div className={`fixed w-[837px] top-0 right-0 mt-[40px] flex flex-col justify-center items-center bg-transparent `}>
        <div className={`aboutBox 
                         w-[837px] 
                         h-[900px] 
                         mt-[15px] 
                         items-center 
                         flex 
                         flex-col 
                         bg-white 
                         `}>
        <motion.div
          className={`heroAbout 
                       w-[788px] 
                       h-[712px] 
                       flex 
                       flex-col 
                       `}

          initial={{ opacity: 0, x: '100%',  }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        >
          <div className={`About 
                           w-[788px] 
                           h-[603px] 
                           mt-[65px]
                           flex
                           flex-row
                           gap-[10.1px]
                           justify-center
                           `}>
            <motion.div
              className={`ImgBox 
                           w-[304.09px] 
                           h-[522px] 
                           mt-[40px]
                           `}

              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            >
              <img src={FelipePic} alt="Foto do Fotógrafo Felipe Ramalho" />
            </motion.div>
            <motion.div
              className={`TextBox
                           w-[473.81px]
                           h-[603px]
                           flex
                           justify-center
                           items-center
                           text-right
                           `}

              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }} 
            >
              <p className={`text
                             font-Inter
                             text-[20px]
                             font-light
                             leading-[26px]
                             `}>
                Bom, me chamo Felipe, mas pode me chamar de Fe. Você pode já ter esbarrado em mim andando de moto, em algum show de rock ou curtindo um café. A paixão pela fotografia se apresentou para mim há quase 20 anos como um hobby que se tornou minha arte aos poucos. Minhas inspirações vêm desde cenários urbanos e mais sombrios até uma cachoeira cheia de vida e banhada pela luz do pôr do sol. Busco autenticidade e verdade tanto nas fotos quanto na vida e me encanto com a simplicidade das coisas e das pessoas. Por que dizer tudo isso? Como umbandista, acredito na potência da ancestralidade e que caminhos se cruzam para somar. Bora seguir essa viagem?
              </p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className={`contact
                       w-[787px]
                       h-[154px]
                       mt-[10px]
                       flex
                       flex-row
                       justify-between
                       `}

          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0, }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }} 
        >
          <div className={`titulo`}>
            <h3 className={`titulo
                            font-Inter
                            text-[36px]
                            font-normal
                            `}>
              Contato
            </h3>
          </div>
          <div className={`contactsAdress
                           w-[256px]
                           h-[75px]
                           flex
                           flex-col
                           mt-[72px]
                           gap-[9px]
                           `}>
            <div className={`email
                           w-[256px]
                           h-[19px]
                           flex
                           flex-row
                           `}>
              <div className="flex flex-row justify-center items-center gap-[11.51px]">
                <img src={Email} alt="Imagem de envelope" />
                <p className={`
                               font-Inter
                               text-[16px]   
                               `}>contatoferamalho@gmail.com</p>
              </div>
            </div>
            <div className={`email
                           w-[256px]
                           h-[19px]
                           flex
                           flex-row
                           `}>
              <div className="flex flex-row justify-center items-center gap-[11.51px]">
                <img src={Whatsapp} alt="Imagem de envelope" />
                <p className={`
                               font-Inter
                               text-[16px]   
                               `}>(11)-95961-7887</p>
              </div>
            </div>
            <div className={`email
                           w-[256px]
                           h-[19px]
                           flex
                           flex-row
                           `}>
              <div className="flex flex-row justify-center items-center gap-[11.51px]">
                <img src={Instagram} alt="Imagem de envelope" />
                <p className={`
                               font-Inter
                               text-[16px]   
                               `}>fe.ramalhofotografia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default About;
