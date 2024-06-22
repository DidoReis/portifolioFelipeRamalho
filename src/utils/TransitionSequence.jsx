import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLogo from '../components/IntroLogo';
import IntroLoad from '../components/IntroLoad';
import Welcome from '../components/Welcome';
import Index from '../components/Index';

const pages = [
  { component: IntroLogo, key: 'introLogo' },
  { component: IntroLoad, key: 'introLoad' },
  { component: Welcome, key: 'welcome' },
  { component: Index, key: 'index' }
];

const TransitionSequence = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (currentPage < pages.length - 1) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 2000); // 5 segundos

      return () => clearInterval(interval);
    }
  }, [currentPage]);

  const CurrentComponent = pages[currentPage].component;

  return (
    <AnimatePresence>
      <motion.div
        key={pages[currentPage].key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Duração da animação de transição
      >
        <CurrentComponent />
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionSequence;
