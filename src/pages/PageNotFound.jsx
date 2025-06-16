import React from "react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        style={styles.code}
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={styles.message}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>
      <motion.a
        href="/"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={styles.button}
      >
        Go Home
      </motion.a>
    </div>
  );
}; 

const styles = {
  container: {
    backgroundColor: "#d0d0d0",
    height: "100vh",
    width: "100vw",
    color: "#1f2e47",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: '"Inknut Antiqua", serif',
  },
  code: {
    fontSize: "6rem",
    fontWeight: "bold",
  },
  message: {
    fontSize: "1.2rem",
    maxWidth: "400px",
    margin: "20px 0",
  },
  button: {
    marginTop: "10px",
    padding: "12px 24px",
    backgroundColor: "#1f2e47",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1rem",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  },
};

export default PageNotFound;
