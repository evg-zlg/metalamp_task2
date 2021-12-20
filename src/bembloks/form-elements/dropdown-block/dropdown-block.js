document.querySelectorAll('.dropdown__select').forEach(function (dropDownWrapper) {
  console.log("cli");
	
  dropDownWrapper.addEventListener("click", function(){
    dropDownWrapper.classList.toggle("dropdown__select--open");
    //console.log(document.querySelector(".dropdown_items"));
    document.querySelector(".dropdown__items").classList.toggle("dropdown__items--visible");
  })

});
