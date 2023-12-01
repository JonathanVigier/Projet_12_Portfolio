import React, { useState, useEffect } from "react";
import Logo from "../../../components/Logo/Logo";
import NavItem from "../../../components/NavItem/NavItem";
import { motion } from "framer-motion";
import BurgerMenu from "../../../components/BurgerMenu/BurgerMenu";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 482);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 482);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      className="header-container"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <Logo />
      {isSmallScreen ? (
        <BurgerMenu />
      ) : (
        <>
          <div className="middle-content">
            <NavItem target={"/#about-me"} text={"About Me"} />
          </div>
          <ul className="right-content">
            <NavItem target={"/#projects"} text={"My Projects"} />
            <NavItem target={"/#contact"} text={"Contact"} />
          </ul>
        </>
      )}
    </motion.header>
  );
};

export default Header;
