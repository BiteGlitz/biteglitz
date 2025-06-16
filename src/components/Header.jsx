import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import Logo from '../assets/fullTextLogo.png';
import ScrolledLogo from '../assets/logo.png'; // <- Add second logo
     
const Header = () => {
  const [fly, setFly] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isContactPage = location.pathname === '/contact';

  const handleClick = () => {
    setFly(true);
    setTimeout(() => {
      navigate('/contact');
    }, 1000);
    setTimeout(() => {
      setFly(false);
    }, 3000);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    backgroundColor: '#D9D9D9',
    padding: '16px 40px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  const logoStyle = {
    height: '50px',

    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: '#8D8F91',
    color: '#ffffff',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const iconStyle = {
    fontSize: '20px',
    color: '#333',
  };

  const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
   maxWidth: '1440px',
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={headerStyle}
    >
        <div style={headerContainerStyle}>
      {/* Logo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 8 }}
        style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <img
          src={scrolled ? ScrolledLogo : Logo}
          alt="Logo"
          style={logoStyle}
        />
      </motion.div>

      {/* Right Side: Button + Icon */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Contact Us Button (only if not on contact page) */}
        {!isContactPage && (
          <motion.button
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
          <AnimatePresence>
            {fly ? (
              <motion.div
                key="plane"
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{ x: 100, y: -40, rotate: 45, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute' }}
              >
                <FiSend style={iconStyle} />
              </motion.div>
            ) : (
              <motion.div key="idle-plane">
                <FiSend style={iconStyle} />
              </motion.div>
            )}
          </AnimatePresence>  Contact Us
          </motion.button>
        )}

        {/* Flying Icon (always shown) */}
        {/* <div styS */}
      </div>
      </div>
    </motion.header>
  );
};

export default Header;
