
export
function changeToResult() {
  const card = document.getElementById("card")
  const result = document.getElementById("result")
  const submitButton = document.getElementById("submitButton")
  submitButton.addEventListener("click", () => {
  submitButton.style.color = "#FC7614"
  submitButton.style.backgroundColor = "#FFFF"
  card.style.display = 'none'
  result.style.display = 'block'
})
}
export
function dragResult() {
  const buttons = document.querySelectorAll("#listBT")
  const resultP = document.getElementById("conentP")
  buttons.forEach(buttons => {
  buttons.addEventListener("click", () => {
  resultP.textContent = buttons.textContent
  })
  } )
  }