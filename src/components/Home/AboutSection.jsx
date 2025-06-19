import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { FaDribbble, FaLinkedin, FaMedium, FaBehance, FaGithub } from "react-icons/fa";
import Arrow from '../../assets/aboutMeArrow.png';
import Image from "../../assets/profileWithBg.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate = useNavigate();
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
        fontFamily: "Inknut Antiqua",
      }}
    >
      {/* Social Icons */}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
            width: "70%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "3rem",
          marginBottom: "4rem",
          fontSize: "1.8rem",
          color: "#fff",
        }}
      >
        <FaDribbble />
        <FaLinkedin />
        <FaMedium />
        <FaBehance />
        <FaGithub />
      </motion.div>
      </div>
      {/* Main Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            position: "relative",
            width: "400px",
            // height: "300px",
            // borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={Image}
            alt="profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

         
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ maxWidth: "600px" }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#1f1f1f" }}>
            Bit about me
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
              color: "#333",
            }}
          >
            I'm Muneeb Ansari, A Web Developer, Web Designer, and Graphic
            Designer with over 3 years of experience. I specialize in React.js, HTML,
            CSS, and Figma. I'm also the founder of BiteGlitz, where I work on
            innovative projects. I love building modern UIs with motion and creativity.
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
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
