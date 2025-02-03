import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Banner.css';

import { FaShoppingCart } from 'react-icons/fa';

const Banner = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(true);
    }, 2500);
  }, []);

  return (
    <div className="container-pai">
      <div className='background-image'></div>

      {/* Faixa escura lateral */}
      <div className='faixa-container-pai'>
        <motion.h1
          className='titulo-principal'
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}>
          <FaShoppingCart style={{ marginRight: '10px' }} />

          CATÁLOGO
        </motion.h1>


      </div>

      {/* Faixa animada (2025 - CETI Commerce) */}
      {showOverlay && (
        <motion.div
          className="faixa-animada"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          <p>2025 - CETI Commerce</p>
        </motion.div>
      )}

      {/* Bloco pequeno na esquerda */}
      <motion.div
        className="bloco-info"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <p>CETI Commerce. Catálogo de produtos disponíveis à venda.</p>
      </motion.div>
    </div>
  );
};

export default Banner;
