import { createAboutMeSection } from "./aboutme/aboutme";
import { createExperienceStudiesSection } from "./experience_studies/experience_studies";
import { createHeroSection } from "./hero/hero";
import { createSkillsSection } from "./skills/skills";
import { createProjectsSection } from "./projects/projects";
import { createContactSection } from "./contact/contact";

export const loadMain = () => {
  const body = document.querySelector("body");
  const main = document.createElement("main");

  main.appendChild(createHeroSection());
  main.appendChild(createAboutMeSection());
  main.appendChild(createSkillsSection());
  main.appendChild(createExperienceStudiesSection());
  main.appendChild(createProjectsSection());
  main.appendChild(createContactSection());
  body.append(main);
} 