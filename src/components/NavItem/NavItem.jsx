import React from "react";
import { motion } from "framer-motion";

const NavItem = ({ target, text }) => {
  return (
    <motion.li className="nav-button-container">
      <a href={target} className="nav-button">
        {text}
      </a>
    </motion.li>
  );
};

export default NavItem;
