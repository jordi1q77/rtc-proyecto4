// selector
import "./burger.css"
// method
 function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}
export const createBurger = (options) => {
	const header = document.querySelector("header");
	const divBurger = document.createElement("div");
	const divLayerTop = document.createElement("div");
	const divLayerMid = document.createElement("div");
	const divLayerBot = document.createElement("div");
	const nav = document.createElement("nav");
  const ul = document.createElement("ul");
	
	divBurger.classList.add("hamburger");
	divBurger.addEventListener('click', toggleMenu, false);

	divLayerTop.classList.add("_layer", "-top");
	divLayerMid.classList.add("_layer", "-mid");
	divLayerBot.classList.add("_layer", "-bottom");
	nav.classList.add("menuppal");

  for (const opc of options) {
    const liOpc = document.createElement("li");
    const aOpc = document.createElement("a");
    aOpc.innerText = opc.name;
    aOpc.href = opc.link;
    liOpc.appendChild(aOpc);
    ul.append(liOpc);
  }
	
  nav.append(ul);

	divBurger.append(divLayerTop);
	divBurger.append(divLayerMid);
	divBurger.append(divLayerBot);

	header.append(divBurger);
  header.append(nav);
 
}
// event


//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/