import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.eclipse}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={styles.text}
        >
          COMING SOON
        </motion.h1>

        <div style={styles.progressBarBackground}>
          <motion.div
            style={styles.progressBar}
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#bbbbbb", // dark background
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  eclipse: {
    width: 400,
    height: 400,
    borderRadius: "50%",
    background: "radial-gradient(circle at 60% 40%, #615F5FFF, #2a2a2a 80%)",
    boxShadow: "0 0 100px 30px #4b4b4b",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#e0e0e0",
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "4px",
    marginBottom: 30,
  },
  progressBarBackground: {
    width: "70%",
    height: 10,
    borderRadius: 10,
    backgroundColor: "#222",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
};

export default ComingSoon;
