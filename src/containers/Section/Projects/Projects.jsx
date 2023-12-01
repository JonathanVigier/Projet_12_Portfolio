import React from "react";
import Project from "../../../components/Project/Project";
import informations from "../../../config/informations.json";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      {informations.projects.map((project) => {
        return (
          <Project picture={project.picture} id={project.id} key={project.id} />
        );
      })}
    </section>
  );
};

export default Projects;
