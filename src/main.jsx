// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FirstLoad from "./pages/FirstLoad";
import LayoutWrapper from "./utils/LayoutWrapper";
import "./index.css";
import { ThemeModeProvider } from "./context/ThemeModeContext";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import ComingSoon from "./pages/CommingSoon";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomCursor />
    <ThemeModeProvider>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/first-load" element={<FirstLoad />} />
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<ComingSoon />} />
            <Route path="contact" element={<ComingSoon />} />
            <Route path="games" element={<ComingSoon />} />
            <Route path="projects" element={<ComingSoon />} />
            <Route path="blog" element={<ComingSoon />} />
            <Route path="resume" element={<ComingSoon />} />
            <Route path="skills" element={<ComingSoon />} />
            <Route path="services" element={<ComingSoon />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  </React.StrictMode>
);
