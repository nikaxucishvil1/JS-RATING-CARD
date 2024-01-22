import { Choose } from "./events/events.js";
Choose()




const buttonSubmit = document.querySelector("#submitButton");
const card = document.querySelector("#card");
const result = document.querySelector("#result");
const resultP = document.querySelector("#resultP");

let selectedDiv = document.querySelectorAll("#listDiv:checked");

buttonSubmit.addEventListener("click", function () {
  card.style.display = "none";
  result.style.display = "block";
  resultP.innerHTML = `You selected ${selectedDiv} out of 5`;
});
