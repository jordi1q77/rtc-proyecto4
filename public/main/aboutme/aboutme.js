import './aboutme.css';
import data from "../../data/data";

export const createAboutMeSection = () => {
  const sectionAboutMe = document.createElement("section");
  const title = document.createElement("h2");
  const aboutMe = document.createElement("p");

  sectionAboutMe.id = "aboutMe";
  sectionAboutMe.classList.add("aboutMe");
  title.textContent = "About Me";
  title.classList.add("title");
  aboutMe.textContent = data.aboutMe;

  sectionAboutMe.append(title);
  sectionAboutMe.append(aboutMe);

  return sectionAboutMe;
} 