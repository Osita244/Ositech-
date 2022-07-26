import React from "react";
import ProjectItem from  "../components/ProjectItem";
//import img_lights from "../assets/img_lights.jpg";
//import bulb from "../assets/bulb.png";
import  "../components/styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

import  "../components/styles/Projects.css";



function  Projects ()  {
    return (
        <div className="projects">
            <h1>My Personal Projects </h1>

            <div className="ProjectLists">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />;
                })}
            </div>
              </div>
    );
}

export default Projects;
