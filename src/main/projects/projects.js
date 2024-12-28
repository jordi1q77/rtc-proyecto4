import './projects.css';
import data from "../../../public/data/data";
import { createTitle } from '../../../src/components/title/title';

export const createProjectsSection = () => {
  const projectsSection = document.createElement("section");
  const projectList = document.createElement("ul");

  projectsSection.id = "projects";
  projectsSection.classList.add("projects");
  
  projectsSection.append(createTitle("My Projects"));

  for (const project of data.projects) {
      const projectElement = document.createElement("li");
      const preview = document.createElement("img");
      const projectTitle = document.createElement("h3");
      const projectDescription = document.createElement("p");
      const projectButton = document.createElement("a");

      // Añadiendo clases y contenido
      preview.src = project.preview;
      preview.alt = project.title;
      preview.classList.add("project-preview");

      projectTitle.textContent = project.title;
      projectTitle.classList.add("project-title");

      projectDescription.textContent = project.description;
      projectDescription.classList.add("project-description");

      projectButton.textContent = "View Project";
      projectButton.href = project.link;
      projectButton.classList.add("project-button");
      projectButton.target = "_blank"; // Abrir en nueva pestaña

      projectElement.append(preview, projectTitle, projectDescription, projectButton);
      projectList.append(projectElement);
  }

  projectsSection.append(projectList);
  return projectsSection;
}