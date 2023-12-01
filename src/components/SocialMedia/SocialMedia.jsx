import React from "react";
import { motion } from "framer-motion";

const SocialMedia = ({ icon, target, text }) => {
  return (
    <motion.div className="social-media btn">
      <i className={icon + " social-media-icon"}></i>
      <a
        href={target}
        target="_blank"
        rel="noreferrer"
        className="social-media-link"
      >
        {text}
      </a>
    </motion.div>
  );
};

export default SocialMedia;
