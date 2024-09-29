import data from '../data/data.js';
import { createBurger } from './burguer/burger.js';
import './header.css';

const opcMenu = [
  {name:'Home',link:'#home'},
  {name:'About Me',link:'#aboutMe'},
  {name:'Skills',link:'#skills'},
  {name:'Experience/Studies',link:'#experience_studies'},
  {name:'Projects',link:'#projects'},
  {name:'Contact',link:'#contact'}
]
export const loadHeader = () => {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const h1Nombre = document.createElement("H1");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  header.id = "home";
  h1Nombre.innerText = data.name;
  nav.classList.add("navHorizontal");
  for (const opc of opcMenu) {
    const liOpc = document.createElement("li");
    const aOpc = document.createElement("a");
    aOpc.innerText = opc.name;
    aOpc.href = opc.link;
    liOpc.appendChild(aOpc);
    ul.append(liOpc);
  }

  header.append(h1Nombre);
  nav.append(ul);
  header.append(nav);
  body.append(header);
  createBurger(opcMenu);
}