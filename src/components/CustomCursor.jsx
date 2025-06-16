import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    const detectCursorType = (e) => {
      const el = e.target;
      const tag = el.tagName.toLowerCase();
      const styleCursor = window.getComputedStyle(el).cursor;

      if (styleCursor === "pointer" || ["button", "a"].includes(tag)) {
        setCursorType("pointer");
      } else if (["input", "textarea"].includes(tag)) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    animate();
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", detectCursorType);
    document.addEventListener("click", () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 150);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", detectCursorType);
    };
  }, []);

  const getCursorSVG = () => {
    switch (cursorType) {
      case "pointer":
        return (
          <svg
            viewBox="0 0 512 512"
            width="30"
            height="30"
            style={baseStyle()}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M358.182 179.361c-19.493-24.768-52.679-31.945-79.872-19.098-15.127-15.687-36.182-22.487-56.595-19.629V67c0-36.944-29.736-67-66.286-67S89.143 30.056 89.143 67v161.129c-19.909-7.41-43.272-5.094-62.083 8.872-29.355 21.795-35.793 63.333-14.55 93.152l109.699 154.001C134.632 501.59 154.741 512 176 512h178.286c30.802 0 57.574-21.5 64.557-51.797l27.429-118.999A67.873 67.873 0 0 0 448 326v-84c0-46.844-46.625-79.273-89.818-62.639zM80.985 279.697l27.126 38.079c8.995 12.626 29.031 6.287 29.031-9.283V67c0-25.12 36.571-25.16 36.571 0v175c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16v-35c0-25.12 36.571-25.16 36.571 0v35c0 8.836 7.163 16 16 16H272c8.837 0 16-7.164 16-16v-21c0-25.12 36.571-25.16 36.571 0v21c0 8.836 7.163 16 16 16h6.857c8.837 0 16-7.164 16-16 0-25.121 36.571-25.16 36.571 0v84c0 1.488-.169 2.977-.502 4.423l-27.43 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H176c-5.769 0-11.263-2.878-14.697-7.697l-109.712-154c-14.406-20.223 14.994-42.818 29.394-22.606zM176.143 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.733 0-14-7.163-14-16zm75.428 0v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16zM327 400v-96c0-8.837 6.268-16 14-16h6c7.732 0 14 7.163 14 16v96c0 8.837-6.268 16-14 16h-6c-7.732 0-14-7.163-14-16z"
              fill="white"
            />
          </svg>
        );
      case "text":
        return (
          <svg width="28" height="28" viewBox="0 0 24 24" style={baseStyle()}>
            <rect x="10" y="4" width="4" height="16" fill="white" />
          </svg>
        );
      default:
        return (
          <svg
            viewBox="0 0 490 490"
            width="30"
            height="30"
            style={{
              stroke: "#fff",
              strokeWidth: 18,
              fill: "none",
              filter: "drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff)",
              transform: `${clicking ? "scale(0.95)" : "scale(1)"} rotate(280deg)`,
              transition: "transform 0.2s ease",
            }}
          >
            <path d="M30.912,252.922l114.5,39.3c9,3.1,18.7-1.7,21.8-10.7s-1.7-18.7-10.7-21.8l-114.6-39.3c-6.6-2.3-7.5-7.9-7.6-10.3 c-0.1-2.3,0.5-8,6.9-10.7l399.1-164.1c6.2-2.6,10.6,0.9,12.2,2.4c1.6,1.6,5,6,2.4,12.2l-164.1,399c-2.7,6.5-8.3,7-10.7,6.9 c-2.3-0.1-8-1-10.3-7.6l-43.5-127.1l139.9-164.9c6.1-7.2,5.2-18-2-24.2c-7.2-6.1-18-5.2-24.2,2l-146.2,172.3 c-3.9,4.6-5.1,10.9-3.1,16.6l46.6,136.4c6.2,18.1,22.5,30.2,41.7,30.8c0.5,0,1,0,1.4,0c18.5,0,34.9-10.9,42-28.2l164.1-399 c7.1-17.3,3.3-36.3-9.9-49.5c-13.2-13.2-32.2-17-49.5-9.9l-399,164.1c-17.5,7.4-28.6,24.5-28,43.6 C8.712,236.122,12.712,246.722,30.912,252.922z" />
          </svg>
        );
    }
  };
  
  const baseStyle = () => ({
    stroke: "#fff",
    strokeWidth: clicking ? 24 : 18,
    fill: "none",
    transition: "transform 0.2s ease",
    transform: clicking ? "scale(0.95)" : "scale(1)",
    filter: "drop-shadow(0 0 2px white)",
  });

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
      }}
    >
      {getCursorSVG()}
    </div>
  );
};

export default CustomCursor;
