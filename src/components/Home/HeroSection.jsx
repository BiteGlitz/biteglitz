import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import BGLogo from '../../assets/logoT.png'; 
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Arrow from '../../assets/aboutMeArrow.png';
import { useNavigate } from 'react-router-dom';
const socialLinks = [
    {
      icon: FaWhatsapp,
      link: "https://wa.me/923284923558", // Replace with your number
      color: "#25D366", // WhatsApp green
    },
    {
      icon: FaFacebook,
      link: "https://facebook.com/biteglitz",
      color: "#1877F2", // Facebook blue
    }, 
    {
      icon: FaInstagram,
      link: "https://instagram.com/biteglitz",
      color: "#E1306C", // Instagram pink
    },
    {
      icon: FaEnvelope,
      link: "mailto:biteglitz@gmail.com",
      color: "red", // Gmail red
    },
    {
      icon: FaTwitter,
      link: "https://x.com/BiteGlitz",
      color: "#1877F2", // Gmail red
    },
  ];
const Hero = ({ scrollContainerRef }) => {
    const navigate = useNavigate();
    const handleScroll = () => {
        if (scrollContainerRef?.current) {
        scrollContainerRef.current.scrollTo({
          top: scrollContainerRef.current.offsetHeight,
          behavior: "smooth",
        });
      }
    };
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#bdbdbd',
        overflow: 'hidden',
        padding: '4rem 2rem',
        color: '#1f1f1f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Inknut Antiqua",
      }}
    >
      {/* Animated Background */}
      <motion.div
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(270deg, #dcdcdc, #c0c0c0, #dcdcdc)',
          backgroundSize: '600% 600%',
          zIndex: 0,
        }}
      ></motion.div>

      {/* Background Moving Logo */}
      <motion.img
        src={BGLogo}
        alt="Background Logo"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: 'absolute',
          right: '5%',
          width: '60%',
          opacity: 0.05,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Main Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1440px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 500 }}>Hi, I am</h2>
          <h1 style={{ fontSize: '3rem', fontWeight: 1000 }}>
            <span style={{ color: '#1b2d4b' }}>MUNEEB</span>{' '}
            <span style={{ color: '#fff' }}>ANSARI</span>
          </h1>
          <h3 style={{ fontWeight: 600 }}>
            I am a <span style={{ color: '#444' }}>Full Stack Developer</span>
          </h3>
          <p style={{ margin: '1rem 0', fontWeight: 500 }}>
            I am a motivated and versatile individual, always eager to take on new
            challenges. With a passion for learning I am dedicated to delivering
            high-quality results. With a positive attitude and a growth mindset,
            I am ready to make a meaningful contribution and achieve great things.
          </p>
          <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "linear-gradient(to right, #0f1c2b, #6d7781)", // dark to soft gradient
        color: "#fff",
        padding: "5px 28px",
        borderRadius: "16px", // matches the rounded edge
        border: "2px solid rgba(255, 255, 255, 0.2)",
        fontSize: "20px",
        fontFamily: "'Inknut Antiqua', serif",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "inset 0 1px 4px rgba(255, 255, 255, 0.2)", // soft inner border
        cursor: "none", // disable default cursor
      }}
      onClick={() => navigate('/about')}
    >
      About Me
     <img src={Arrow}/>
    </motion.button>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    style={{
      position: "absolute",
      right: "2rem",
      top: "30%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      zIndex: 20,
    }}
  >
    {socialLinks.map(({ icon: Icon, link, color }, index) => (
      <motion.a
        key={index}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.5,
          rotate: 10,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          fontSize: "28px",
          color: "#1f1f1f",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#1f1f1f")}
      >
        <Icon />
      </motion.a>
    ))}
  </motion.div>
      

      {/* Scroll Icon */}
      <motion.div
        className="scroll-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleScroll}
        style={{ cursor: 'pointer' }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="chevron"
            animate={{ y: [0, 30, 40, 55], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i,
              ease: 'easeOut',
            }}
            style={{
              position: 'absolute',
              width: '28px',
              height: '8px',
              transform: 'scale3d(0.5, 0.5, 0.5)',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                width: '51%',
                height: '100%',
                background: '#1f1f1f',
                transform: 'skew(0deg, 30deg)',
              }}
            />
            <div
              style={{
                width: '51%',
                height: '100%',
                background: '#1f1f1f',
                transform: 'skew(0deg, -30deg)',
              }}
            />
          </motion.div>
        ))}
        <span className="scroll-text">Scroll down</span>
      </motion.div>

      <style>
        {`
          .scroll-container {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 4;
          }

          .scroll-text {
            margin-top: 75px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 12px;
            color: #1f1f1f;
            text-transform: uppercase;
            opacity: 0.25;
            animation: pulse 2s linear alternate infinite;
          }

          @keyframes pulse {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
