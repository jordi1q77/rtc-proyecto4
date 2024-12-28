import './title.css';

export const createTitle = (text) => {
  const title = document.createElement("h2");
  title.textContent = text;
  title.classList.add("title");
  return title;
}
