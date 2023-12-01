import React from "react";
import informations from "../../config/informations.json";

const Skills = () => {
  return (
    <div className="technologies-container">
      <h2 className="title">Technologies</h2>
      <div className="techs-wrapper">
        {informations.technologies.map((stack, index) => {
          return (
            <div className="techs-content" key={index}>
              <h3 className="subtitle">{stack.name}</h3>
              <ul className="techs-list">
                {stack.list.map((tech, index) => {
                  return (
                    <li key={index}>
                      <i className={tech.icon + " tech"}></i>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
