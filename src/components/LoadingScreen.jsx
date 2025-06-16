// src/components/LoadingScreen.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Card,
  Typography,
  useMediaQuery,
  useTheme as useMUITheme,
  Stack,
  CircularProgress,
} from "@mui/material";
import fullLogo from "../assets/fullLogo.png";

const loadingVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const MotionCard = motion(Card);

const LoadingScreen = ({ onFinish }) => {
  const theme = useMUITheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "fixed",
        backgroundColor: theme.palette.primary.main,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        zIndex: 1300,
        px: 2,
      }}
    >
      <AnimatePresence>
        <MotionCard
          key="loading-screen"
          variants={loadingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 5,
            bgcolor: theme.accent || theme.palette.background.paper,
            boxShadow: 4,
            width: { xs: "100%", sm: "90%", md: "70%" },
            height: { xs: "100%", sm: "90%", md: "80%" },
            textAlign: "center",
            px: { xs: 3, sm: 5 },
            py: { xs: 4, sm: 6 },
            position: "relative",
          }}
        >
          <Stack spacing={3} alignItems="center" sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", maxWidth: 300 }}>
              <img
                src={fullLogo}
                alt="Logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress
                variant="determinate"
                value={progress}
                size={isXs ? 60 : 80}
                thickness={4.5}
                sx={{
                  color: theme.palette.primary.light,
                  animation: "spin 1.2s linear infinite",
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  sx={{
                    fontSize: isXs ? "0.8rem" : "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {`${Math.round(progress)}%`}
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontFamily: "Inknut Antiqua",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
              }}
            >
              Welcome to biteglitz
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: theme.palette.text.secondary,
                textAlign: "center",
                maxWidth: 500,
              }}
            >
              Creating impactful solutions for a better tomorrow.
            </Typography>
          </Stack>
        </MotionCard>
      </AnimatePresence>
    </Box>
  );
};

export default LoadingScreen;
