
import './contact.css';
import { createContactForm } from './contactForm/contactForm';
import { createContactOptions } from './contactOptions/contactOptions';

export const createContactSection = () => {
  const section = document.createElement("section");
  section.id = "contact";
  section.classList.add("contact");

  section.appendChild(createContactOptions()); 
  section.appendChild(createContactForm());

  const confirmationMessage = document.createElement("span");
  confirmationMessage.id = "confirmation-message";
  confirmationMessage.classList.add("success-message");
  section.appendChild(confirmationMessage);

  return section;
};

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".chip");
  const form = document.getElementById("contact-form");
  let selectedTopic = "";

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      selectedTopic = chip.getAttribute("data-topic");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) showError("name-error", "Name is required.");
    if (!email) showError("email-error", "Email is required.");
    if (!message) showError("message-error", "Message is required.");
    if (!selectedTopic) {
      alert("Please select a topic.");
      return;
    }

    if (name && email && message && selectedTopic) {
      const mailtoLink = `mailto:tu_correo@example.com?subject=${encodeURIComponent(
        `Message about: ${selectedTopic}`
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoLink;

      document.getElementById("confirmation-message").textContent =
        "Message sent, thanks! I'll respond to you.";
      document.getElementById("confirmation-message").style.display = "block";
      form.reset();
      chips.forEach(c => c.classList.remove("selected"));
      selectedTopic = "";
    }
  });

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearErrors() {
    document.querySelectorAll(".error").forEach(error => error.style.display = "none");
  }
});
