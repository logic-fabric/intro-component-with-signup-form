import { checkInputValidity, giveFocusTo } from "./actions.js";

const tryItFreeButton = document.getElementById("try-it-free-button");

tryItFreeButton.addEventListener("click", () => {
  giveFocusTo(firstNameInput);
});

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

firstNameInput.addEventListener("blur", () => {
  checkInputValidity("first-name");
});

lastNameInput.addEventListener("blur", () => {
  checkInputValidity("last-name");
});

emailInput.addEventListener("blur", () => {
  checkInputValidity("email");
});

passwordInput.addEventListener("blur", () => {
  checkInputValidity("password");
});
