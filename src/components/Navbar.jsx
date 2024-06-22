// Navbar.js
import { useEffect, useState } from 'react';
import styles from '../styles';
import Logo from "../assets/img/logo/logo.png";
import Sobre from './About'; // Importe o componente Sobre

import {motion, AnimatePresence} from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setShowContent(false);
      setTimeout(() => setMenuOpen(false), 100)
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [menuOpen]);

  // Variantes de animação
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      x: '100%',
      opacity: 0,
      scale: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 0.7,
      },
    },
  };

  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`text-light border-b-[1px] ${styles.boxWidth} flex justify-center items-center ml-[25px] mr-[25px] mt-[15px]`}
      >
        <div
          className={`navbar
                        ${styles.boxWidth}
                        h-[71px]
                        flex
                        justify-between
                        items-center
                        `}
        >
          <div className="logoBox w-[208px] h-[71px] flex flex-row">
            <img
              src={Logo}
              className={`w-[71px] h-[71px] m-0`}
              alt="Logotipo Felipe Ramos fotografia de arquitetura"
            />
            <p
              className={`font-Inter font-extralight text-[12px] flex justify-end mt-[48px]`}
            >
              fotografia de arquitetura
            </p>
          </div>
          <ul
            className={`w-[71px] h-[44px] flex justify-center items-center mt-[40px]`}
          >
            <li
              className={`text-[20px] font-Inter font-light`}
            >
              <button className="w-[71px] h-[44px]" onClick={toggleMenu}>
                {menuOpen ? 'Fechar' : 'Sobre'}
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Renderize o componente Sobre condicionalmente */}
      <AnimatePresence>
    
      {menuOpen && (
        <motion.div
          className={`fixed 
                      top-[71px]  
                      w-[837px] 
                      h-[900px] 
                      mt-[15px] 
                      right-0 
                      bg-transparent 
                      z-10 
                      `}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={variants}
        >
          {showContent && <Sobre />}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
