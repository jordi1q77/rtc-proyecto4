import { input } from "../../../../src/components/input/input";


export const createContactForm = () => {

  const form = document.createElement("form");
  form.id = "contact-form";

  const [nameInput, nameError] = input("name","Your name","text");
  const [emailInput,emailError] = input("email","Your email","text");
  const [messageTextarea,messageError] = input("message","Your message","textarea");
  
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "✈️ Submit";

  form.append(nameInput, nameError, emailInput, emailError, messageTextarea, messageError, submitButton);
  return form;
}