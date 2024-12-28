import './aboutme.css';
import data from "../../../public/data/data";
import { createTitle } from '../../../src/components/title/title';

export const createAboutMeSection = () => {
  const sectionAboutMe = document.createElement("section");
  const aboutMe = document.createElement("p");

  sectionAboutMe.id = "aboutMe";
  sectionAboutMe.classList.add("aboutMe");
  aboutMe.textContent = data.aboutMe;

  sectionAboutMe.append(createTitle("About Me"));
  sectionAboutMe.append(aboutMe);

  return sectionAboutMe;
} 