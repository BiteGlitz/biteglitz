import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";

// Parallax-style animated full screen section
const ScrollSnapSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const scrollContainerRef = useRef();
  return (
    <div
    ref={scrollContainerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <ScrollSnapSection>
        <HeroSection scrollContainerRef={scrollContainerRef} />
      </ScrollSnapSection>

      <ScrollSnapSection>
        <AboutSection />
      </ScrollSnapSection>

      {/* Add more sections the same way */}
    </div>
  );
};

export default Home;
