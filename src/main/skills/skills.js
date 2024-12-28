import './skills.css';
import data from "../../../public/data/data";
import { skillLogo } from './skills-logo';
import { createTitle } from '../../../src/components/title/title';
import { imagesMoving } from '../../../src/components/imagesMoving/imagesMoving';
export const createSkillsSection = () => {
  const skillsSection = document.createElement("section");
 

  skillsSection.id = "skills";
  skillsSection.classList.add("skills");
  skillsSection.append(createTitle("My Skills"));

  
  skillsSection.append(imagesMoving(data.skills, skillLogo));
  return skillsSection;
  
}