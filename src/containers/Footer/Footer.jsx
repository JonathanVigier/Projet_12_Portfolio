import React from "react";
import Contact from "../Section/Contact/Contact";
import informations from "../../config/informations.json";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <Contact />
      <section className="socials-container">
        <h3 className="subtitle">Stay updated with my latest on socials :</h3>
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
      </section>
    </footer>
  );
};

export default Footer;
