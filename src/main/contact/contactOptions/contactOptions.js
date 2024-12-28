
import { createTitle } from '../../../../src/components/title/title';
import './contactOptions.css';
const topics = ["Agile", "Collaboration", "IA", "Develop", "Philosophy", "Something Cool"];

export const createContactOptions = () => {

  const contactOptions = document.createElement("div");
  contactOptions.classList.add("contact-options");

  contactOptions.appendChild(createTitle("Talk to Me"));

  topics.forEach(topic => {
    const button = document.createElement("button");
    button.classList.add("chip");
    button.setAttribute("data-topic", topic);
    button.textContent = topic;
    contactOptions.appendChild(button);
  });
  return contactOptions;
}