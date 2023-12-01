import React from "react";

const Modal = ({ closeModal, name, description, techs, link }) => {
  return (
    <>
      <div className="overlay" onClick={closeModal} />
      <div className="modal-content">
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <div className="modal-infos-container">
          <h3 className="subtitle">{name}</h3>
          <div className="modal-infos-content">
            <p className="modal-infos-text">{description}</p>
            <ul className="techs-list">
              {techs.map((tech, index) => (
                <li key={index} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
            <a href={link} className="modal-infos-link">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
