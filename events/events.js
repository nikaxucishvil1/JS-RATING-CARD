export
function Choose() {
    const button = document.getElementById("submitButton");
    const Checkbox = document.querySelectorAll("#listDiv");
    let lastClickedDiv = null;
  
    Checkbox.forEach(function (checkbox) {
      checkbox.addEventListener("click", function () {
        if (lastClickedDiv !== null) {
          lastClickedDiv.style.backgroundColor = "#262e38";
        }
        checkbox.style.backgroundColor = "#FC7614";
  
        lastClickedDiv = checkbox;
      });
    });
  }
  