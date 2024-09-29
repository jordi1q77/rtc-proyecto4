import './experience_studies.css';
import data from "../../data/data";

const showExperience = () =>{
  const titleExperience = document.querySelector(".titleExperience");
  const titleStudies = document.querySelector(".titleStudies");
  const contentExperience = document.querySelector(".ulExperience");
  const contentStudies = document.querySelector(".ulStudies");
  titleExperience.classList.add("titleHighlight");
  titleStudies.classList.remove("titleHighlight");
  contentExperience.classList.remove("notVisible");
  contentStudies.classList.add("notVisible");
}


const showStudies = () =>{
  const titleExperience = document.querySelector(".titleExperience");
  const titleStudies = document.querySelector(".titleStudies");
  const contentExperience = document.querySelector(".ulExperience");
  const contentStudies = document.querySelector(".ulStudies");
  titleStudies.classList.add("titleHighlight");
  titleExperience.classList.remove("titleHighlight");
  contentStudies.classList.remove("notVisible");
  contentExperience.classList.add("notVisible");
}
export const createExperienceStudiesSection = () => {
  const sectionExperienceStudies = document.createElement("section");
  const divTitles = document.createElement("div");
  const titleExperience = document.createElement("h2");
  const titleStudies = document.createElement("h2");
  const ulExperience = document.createElement("ul");
  const ulStudies = document.createElement("ul");

  sectionExperienceStudies.id = "experience_studies";
  sectionExperienceStudies.classList.add("sectionExperienceStudies");
  divTitles.classList.add("divTitles");
  titleExperience.textContent = "Experience";
  titleExperience.classList.add("titleHighlight","titleExperience", "title");
  titleExperience.addEventListener("click",() => showExperience());
  titleStudies.textContent = "Studies";
  titleStudies.classList.add("titleStudies", "title");
  titleStudies.addEventListener("click",() => showStudies());
  divTitles.append(titleExperience);

  divTitles.append(titleStudies);
  sectionExperienceStudies.append(divTitles);
  ulStudies.classList.add("ulStudies");
  for (const study of data.education.relevantCourses) {
    const li = document.createElement("li");
    li.textContent = study;
    ulStudies.append(li);
  }
  ulStudies.classList.add("notVisible");

  ulExperience.classList.add("ulExperience");
  for (const work of data.workExperience) {
    const li = document.createElement("li");
    const title  = document.createElement("h3");
    const description = document.createElement("p");
    const dates = document.createElement("p");

    title.textContent = work.company + ' - ' + work.position;
    description.textContent = work.description;
    dates.textContent = work.startDate + ' - ' + work.endDate;
    li.append(title);
    li.append(description);
    li.append(dates);
    ulExperience.append(li);
  }
  sectionExperienceStudies.append(ulStudies);
  sectionExperienceStudies.append(ulExperience);

  return sectionExperienceStudies;

}



