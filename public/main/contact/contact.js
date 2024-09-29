
import './contact.css';

export const createContactSection = () => {
  const section = document.createElement("section");
  section.id = "contact";
  section.classList.add("contact");



  const contactOptions = document.createElement("div");
  contactOptions.classList.add("contact-options");

  const title = document.createElement("h2");
  title.textContent = "Talk to Me";
  title.classList.add("title");
  contactOptions.appendChild(title);

  const topics = ["Agile", "Collaboration", "IA", "Develop", "Philosophy", "Something Cool"];

  topics.forEach(topic => {
    const button = document.createElement("button");
    button.classList.add("chip");
    button.setAttribute("data-topic", topic);
    button.textContent = topic;
    contactOptions.appendChild(button);
  });

  section.appendChild(contactOptions);

  const form = document.createElement("form");
  form.id = "contact-form";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Your Name";
  nameInput.required = true;

  const nameError = document.createElement("span");
  nameError.classList.add("error");
  nameError.id = "name-error";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Your Email";
  emailInput.required = true;

  const emailError = document.createElement("span");
  emailError.classList.add("error");
  emailError.id = "email-error";

  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageTextarea.placeholder = "Your Message";
  messageTextarea.required = true;

  const messageError = document.createElement("span");
  messageError.classList.add("error");
  messageError.id = "message-error";

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "✈️ Submit";

  form.appendChild(nameInput);
  form.appendChild(nameError);
  form.appendChild(emailInput);
  form.appendChild(emailError);
  form.appendChild(messageTextarea);
  form.appendChild(messageError);
  form.appendChild(submitButton);

  section.appendChild(form);

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
