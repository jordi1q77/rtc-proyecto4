import './skills.css';
import data from "../../data/data";
import { skillLogo } from './skills-logo';

export const createSkillsSection = () => {
  const skillsSection = document.createElement("section");
  const title = document.createElement("h2");
  const skillList = document.createElement("ul");

  skillsSection.id = "skills";
  skillsSection.classList.add("skills");
  title.textContent = "My Skills";
  title.classList.add("title");
  skillsSection.append(title);

  for (const skill of data.skills) {
      const skillElement = document.createElement("li");
      const imgLogo = document.createElement("img");
      const mySkill = skillLogo.find(skillLogo => skillLogo.name === skill);
      if (mySkill) {
        imgLogo.src = mySkill.logoUrl;
        imgLogo.alt = mySkill.name;
        skillElement.append(imgLogo);
        skillList.append(skillElement);
      } else {
        console.warn(`Skill ${skill} not found in skillLogo array.`);
      }

  }
  skillsSection.append(skillList);
  return skillsSection;
  
}