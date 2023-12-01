import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import informations from "../../config/informations.json";
import Carousel from "../../components/Carousel/Carousel";

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  const projectIdAsNumber = parseInt(projectId, 10);

  const findProject = (projectId) => {
    const data = informations.projects.find(
      (project) => project.id === projectId
    );
    setProject(data);
  };

  useEffect(() => {
    findProject(projectIdAsNumber);
  }, [project, projectIdAsNumber]);

  return (
    <div className="project-infos-container">
      {project && (
        <>
          <Carousel pictures={project.pictures} />
          <div className="infos-container">
            <div className="project-description-container">
              <h3 className="title">What is {project.name} ?</h3>
              <p className="text">{project.description}</p>
            </div>
            <div className="techs-container">
              <h3 className="title">Technologies</h3>
              <ul className="techs-list">
                {project.techs &&
                  project.techs.map((tech, index) => (
                    <li key={index} className="tech">
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="links">
              <a href={project.link} target="blank" className="link">
                Visit Website
              </a>
              <a href={project.repo_link} target="blank" className="link">
                See more on Github
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectPage;
