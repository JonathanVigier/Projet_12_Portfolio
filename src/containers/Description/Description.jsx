import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import informations from "../../config/informations.json";

const Description = () => {
  return (
    <div className="description-container">
      <h2 className="title">Who am I ?</h2>
      <p className="description-content text">{informations.description}</p>
      <div className="social-media-container">
        <span className="subtitle">Get in touch :</span>
        <div className="social-media-btn-container">
          {informations.social_medias.map((btn, index) => {
            return (
              <SocialMedia
                icon={btn.icon}
                target={btn.link}
                text={btn.name}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Description;
