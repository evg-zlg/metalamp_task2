
// рисуем новые номера
function newPaginationNumber(pickBtn) {
  const countNunmbers = document.querySelector(".pagination__items").childNodes.length - 2;
  const lastPage = Number(document.querySelector(".pagination__items").childNodes[countNunmbers].textContent);
  console.log(pickBtn, lastPage);
  // убираем все указатели
  document.querySelectorAll(".pagination__btn").forEach(function (activeBtn) {
    activeBtn.classList.remove("pagination__btn--picked");
  });
  // ставим указатель на выбранную страницу
  pickBtn.classList.add("pagination__btn--picked");
  //если кликнули по точкам
  if (pickBtn.textContent == "...") {

  }
  
}

// слушаем клик на кнопках с цифрами
document.querySelectorAll(".pagination__btn").forEach(function (paginationBtn) {
  paginationBtn.addEventListener("click", function () {
    // если клик по странице, которая уже выбрана, то делаем ничего
    if (paginationBtn.classList.contains("pagination__btn--picked")) { 
      return 
    } else if (paginationBtn.textContent == "...") {
      // добавить функцию, которая рисует новые номера
      newPaginationNumber(paginationBtn);
    } else if (paginationBtn.nextSibling.classList.contains("pagination__arrow")) {
      // если это последняя страница, то выключаем стрелочку
      // и рисуем новые номера
      newPaginationNumber(paginationBtn);
    } else {
      newPaginationNumber(paginationBtn);
    };
  });
});

// слушаем клик на стрелочке
document.querySelector(".pagination__arrow").addEventListener("click", function() {
  const countNunmbers = document.querySelector(".pagination__items").childNodes.length - 2;
  const lastPage = document.querySelector(".pagination__items").childNodes[countNunmbers];
  const activePage = document.querySelector(".pagination__btn--picked");
  // проверяем, есть ли следующая страница относительно активной
  if (lastPage == activePage) {
    return 
  } else {
    // если следующая страница есть, то передаём ссылку на неё в функцию по отрисовке
    const paginationBtn =  document.querySelector(".pagination__btn--picked").nextSibling;
    newPaginationNumber(paginationBtn);
  }  
});
