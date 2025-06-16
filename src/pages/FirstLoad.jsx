// src/components/FirstLoad.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Box,
  Card,
  Typography,
  useTheme as useMUITheme,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";
import fullLogo from "../assets/fullLogo.png";
import { useNavigate } from "react-router-dom";

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

const FirstLoad = () => {
  const navigate = useNavigate();
  const theme = useMUITheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleContinue = () => {
    localStorage.setItem("hasVisited", "true");
    navigate("/");
  };

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
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            bgcolor: theme.accent || theme.palette.background.paper,
            color: theme.text || theme.palette.text.primary,
            boxShadow: 6,
            width: { xs: "100%", sm: "90%", md: "80%", lg: "80%" },
            height: { xs: "100%", sm: "90%", md: "80%" },
            textAlign: "center",
            p: { xs: 3, sm: 5 },
            position: "relative",
          }}
        >
          <Stack spacing={3} sx={{ width: "100%", mb: 10 }}>
            <Box>
              <img
                src={fullLogo}
                alt="Logo"
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "Inknut Antiqua",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: theme.palette.text.primary,
              }}
            >
              Welcome to biteglitz
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: theme.palette.text.secondary,
                px: { xs: 1, sm: 4 },
              }}
            >
              Creating impactful solutions for a better tomorrow.
            </Typography>{" "}
          </Stack>{" "}
          <Box
            sx={{
              position: "absolute",
              bottom: 30,
              left: 0,
              right: 0,
              px: { xs: 2, sm: 4 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={handleContinue}
              sx={{
                fontFamily: "Inknut Antiqua",
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
                fontWeight: "bold",
                borderRadius: 3,
                py: 1.5,
                px: 4,
              }}
            >
              Begin Your Journey
            </Button>
          </Box>
        </MotionCard>
      </AnimatePresence>
    </Box>
  );
};

export default FirstLoad;
