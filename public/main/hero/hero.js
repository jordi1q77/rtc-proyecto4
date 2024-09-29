import data from "../../data/data";
import './hero.css';
export const createHeroSection = () =>{
  const divHero = document.createElement("div");
  
  divHero.classList.add("hero");
  divHero.append(createDivDeveloper());
  divHero.append(createDivPhoto());

  return divHero;
}
const createDivDeveloper = () => {
  const divDeveloper = document.createElement("div");
  const spanHello = document.createElement("span");
  const profession = document.createElement("h2");
  const explanation = document.createElement("span");

  divDeveloper.classList.add("developer");
  spanHello.classList.add("hello");
  profession.classList.add("profession");
  explanation.classList.add("explanation");

  spanHello.textContent = "Hello";
  profession.textContent = "I'm a developer";
  explanation.textContent = "I build thing for web";

  divDeveloper.append(spanHello);
  divDeveloper.append(profession);
  divDeveloper.append(explanation);

  return divDeveloper;
} 

const createDivPhoto = () => {
  const divPhoto = document.createElement("div");
  const divImgPhoto =  document.createElement("div");
  const photo = document.createElement("img");

  divPhoto.classList.add("divPhoto");
  divImgPhoto.classList.add("divImgPhoto");
  photo.classList.add("photo");

  photo.src = data.avatar;
  divImgPhoto.append(photo);
  divPhoto.append(divImgPhoto);
  return divPhoto;
}
