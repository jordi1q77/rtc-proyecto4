import "./input.css";

export const input = (name, placeholder, type) => {
  const input = document.createElement("input");
  input.type = type;
  input.id = name;
  input.name = name;
  input.placeholder = placeholder;
  input.required = true;
  
  const error = document.createElement("span");
  error.classList.add("error");
  error.id = "${name}-error";
  return [input , error];

}
