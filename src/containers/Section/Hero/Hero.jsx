import React from "react";
import Description from "../../Description/Description";
import Skills from "../../Skills/Skills";
import { motion } from "framer-motion";
import informations from "../../../config/informations.json";

const Hero = () => {
  return (
    <motion.section
      className="hero-container"
      id="about-me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="profile-picture-container">
        <img
          src={informations.picture}
          alt="Just me ^^"
          className="profile-picture"
        />
      </div>
      <Description />
      <Skills />
    </motion.section>
  );
};

export default Hero;
