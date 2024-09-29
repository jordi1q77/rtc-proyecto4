import './footer.css';


export const loadFooter = () => {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const divLinkedin = document.createElement("div");
  const linkedin = document.createElement("img");

  footer.classList.add("footer");
  p.innerHTML = `
    Designed and built by <span style="color: yellow;">me</span> 
    and <span style="color: yellow;">music</span> 
    and <span style="color: yellow;">good</span> 
    <span style="color: yellow;">wives</span>.
  `;
  divLinkedin.classList.add("footer-divIcono");
  linkedin.src = "https://cdn-icons-png.flaticon.com/256/145/145807.png";
  linkedin.classList.add("footer-icono");
  divLinkedin.append(linkedin);

  footer.append(p);
  footer.append(divLinkedin);
  body.append(footer);
}