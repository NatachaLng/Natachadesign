"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const { variant } = useCursor();

  // Smooth spring animation for cursor movement
  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - (variant === "view" ? 32 : 8)); // Center the box or dot
      mouseY.set(e.clientY - (variant === "view" ? 16 : 8));
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, variant]);

  if (!isMounted) return null;

  if (variant === "dot") {
    return (
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 9999,
          x: cursorX,
          y: cursorY,
          boxShadow: "0 0 8px 2px rgba(255,255,255,0.15)",
          mixBlendMode: "difference",
        }}
      />
    );
  }

  // 'view' variant
  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 64,
        height: 32,
        borderRadius: "16px",
        background: "#fff",
        color: "#18181b",
        fontWeight: 700,
        fontSize: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 9999,
        x: cursorX,
        y: cursorY,
        boxShadow: "0 0 16px 2px rgba(255,255,255,0.15)",
      }}
    >
      view
    </motion.div>
  );
};

export default CustomCursor; 