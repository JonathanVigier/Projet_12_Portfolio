import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Mouse = ({ cursorVariants }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 48,
      width: 48,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "#F2FAFB",
      mixBlendMode: "soft-light",
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariants}
    />
  );
};

export default Mouse;
