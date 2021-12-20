document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__select");
  const dropDownItems = dropDownWrapper.querySelector(".dropdown__items");
  const dropDownPlus = dropDownWrapper.querySelectorAll(".dropdown__btn:last-child");
  const dropDownMinus = dropDownWrapper.querySelectorAll(".dropdown__btn:first-child");
  const dropDownControl = dropDownWrapper.querySelector(".dropdown__control");
  const dropDownCount = dropDownWrapper.querySelector(".dropdown__count");

//	Открыть / закрыть список
  dropDownBtn.addEventListener("click", function(){
    dropDownBtn.classList.toggle("dropdown__select--open");
    dropDownItems.classList.toggle("dropdown__items--visible");
  })

// Клик снаружи дропдауна. Закрыть дропдаун
//  document.addEventListener("click", function (e) {
//    if (e.target !== dropDownBtn && e.target !== dropDownAdultPlus) {
//      dropDownBtn.classList.remove("dropdown__select--open");
//      dropDownItems.classList.remove("dropdown__items--visible");
//    }
//  });

// Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      dropDownBtn.classList.remove("dropdown__select--open");
      dropDownItems.classList.remove("dropdown__items--visible");
    }
  });

// Нажатие на +, добавляем 1, включаем минус
  dropDownPlus.forEach(function (e) {
    e.addEventListener("click", function () {
      let count = Number(e.parentNode.childNodes[1].textContent);
      if (count == 0) {
        console.log("parrent=", count);
        e.parentNode.childNodes[0].classList.remove("dropdown__btn-disable");
        count ++;
      } else if (count > 0) {
        count ++;
      }
      e.parentNode.childNodes[1].textContent = String(count);
    })
  })
  
// Нажатие на -
  dropDownMinus.forEach(function (e) {
    e.addEventListener("click", function () {
      let count = Number(e.parentNode.childNodes[1].textContent);
      if (count == 1) {
        count --;
        e.parentNode.childNodes[0].classList.add("dropdown__btn-disable");
      } else if (count > 1) {
        count --;
      }
      e.parentNode.childNodes[1].textContent = String(count);
    })
  })

});
