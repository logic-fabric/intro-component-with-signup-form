import { giveFocusTo } from "./actions.js";

const tryItFreeButton = document.getElementById("try-it-free-button");
const firstNameInput = document.getElementById("first-name");

tryItFreeButton.addEventListener("click", () => {
  giveFocusTo(firstNameInput);
});
