document.querySelectorAll(".radio__input").forEach(function (dropDownWrapper) {
  dropDownWrapper.addEventListener("click", function() {
    dropDownWrapper.parentElement.classList.toggle("radio-button__label--checked");
  });
});