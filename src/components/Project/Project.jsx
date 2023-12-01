import React from "react";
import { NavLink } from "react-router-dom";

const Project = ({ picture, id }) => {
  return (
    <div className="project">
      <NavLink to={`/projects/${id}`} className="project-link" />
      <div className="img-container">
        <img src={picture} alt="project pict" className="img-content" />
      </div>
    </div>
  );
};

export default Project;

// import React, { useState } from "react";
// import { createPortal } from "react-dom";
// import Modal from "../Modal/Modal";

// const Project = ({ picture, name, description, techs, link }) => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = (e) => {
//     e.stopPropagation();
//     setShowModal(true);
//   };

//   return (
//     <div className="project" onClick={openModal}>
//       <div className="img-container">
//         <img src={picture} alt="project pict" className="img-content" />
//       </div>

//       {showModal &&
//         createPortal(
//           <Modal
//             closeModal={() => {
//               setShowModal(false);
//               console.log("fermeture de la modale !");
//             }}
//             name={name}
//             description={description}
//             techs={techs}
//             link={link}
//           />,
//           document.body
//         )}
//     </div>
//   );
// };
