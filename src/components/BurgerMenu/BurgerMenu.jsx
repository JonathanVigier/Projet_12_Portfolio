// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav onClick={toggleMenu}>
//         <svg width="23" height="23" viewBox="0 0 23 23">
//           <path
//             fill="transparent"
//             stroke-width="3"
//             stroke="hsl(0, 0%, 18%)"
//             stroke-linecap="round"
//             d="M 2 2.5 L 20 2.5"
//           ></path>
//           <path
//             fill="transparent"
//             stroke-width="3"
//             stroke="hsl(0, 0%, 18%)"
//             stroke-linecap="round"
//             d="M 2 9.423 L 20 9.423"
//             opacity="1"
//           ></path>
//           <path
//             fill="transparent"
//             stroke-width="3"
//             stroke="hsl(0, 0%, 18%)"
//             stroke-linecap="round"
//             d="M 2 16.346 L 20 16.346"
//           ></path>
//         </svg>
//       </nav>

//       {/* Menu qui s'ouvre lorsqu'il est activé */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: "0%" }}
//             exit={{ opacity: 0, x: "-100%" }}
//           >
//             {/* Contenu du menu ici */}
//             <ul>
//               <li>Accueil</li>
//               <li>À propos</li>
//               <li>Contact</li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default BurgerMenu;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "../NavItem/NavItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu-container">
      <nav className="burger-menu-nav" onClick={toggleMenu}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.path
                key="closeIcon"
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 3 16.5 L 17 2.5 M 3 2.5 L 17 16.346"
              />
            ) : (
              <motion.path
                key="burgerIcon"
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                d="M 2 2.5 L 20 2.5 M 2 9.423 L 20 9.423 M 2 16.346 L 20 16.346"
              />
            )}
          </AnimatePresence>
        </svg>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "50%" }}
            animate={{ type: "spring", opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
          >
            <ul className="burger-menu-list">
              <NavItem target={"#about-me"} text={"About Me"} />
              <NavItem target={"#projects"} text={"My Projects"} />
              <NavItem target={"#contact"} text={"Contact"} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
