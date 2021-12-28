document.querySelectorAll(".expandable-checkbox-list").forEach(function (expCheckbox) {
  expCheckbox.addEventListener("click", function () {
    expCheckbox.childNodes[0].classList.toggle("expandable-checkbox-list__title--open");
    expCheckbox.childNodes[1].classList.toggle("expandable-checkbox-list__items--open");
  });
});