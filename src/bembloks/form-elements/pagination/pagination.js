
// рисуем новые номера
function newPaginationNumber(pickBtn) {
  const paginationItems = document.querySelector(".pagination__items");
  const countItems = paginationItems.childNodes.length - 2;
  const lastPage = Number(document.querySelector(".pagination__items").childNodes[countItems].textContent);
  const firstItemNumber = Number(paginationItems.childNodes[0].textContent);

  // рисуем номера, убираем / добавляем точки
  function dots(firstItemNumber) {
    if ((lastPage - firstItemNumber) <= 4) {
      paginationItems.childNodes[0].childNodes[0].textContent = String(lastPage - 4);
      paginationItems.childNodes[1].childNodes[0].textContent = String(lastPage - 3);
      paginationItems.childNodes[2].childNodes[0].textContent = String(lastPage - 2);
      paginationItems.childNodes[3].childNodes[0].textContent = String(lastPage - 1);
    } else {
      paginationItems.childNodes[0].childNodes[0].textContent = String(firstItemNumber);
      paginationItems.childNodes[1].childNodes[0].textContent = String(firstItemNumber + 1);
      paginationItems.childNodes[2].childNodes[0].textContent = String(firstItemNumber + 2);
      paginationItems.childNodes[3].childNodes[0].textContent = "...";
      if ((lastPage - Number(paginationItems.firstChild.textContent)) <= 4) {
        paginationItems.childNodes[0].childNodes[0].textContent = String(lastPage - 4);
        paginationItems.childNodes[1].childNodes[0].textContent = String(lastPage - 3);
        paginationItems.childNodes[2].childNodes[0].textContent = String(lastPage - 2);
        paginationItems.childNodes[3].childNodes[0].textContent = String(lastPage - 1);
      };
    };
  };

  // убираем все указатели
  function clearPicked() {
    document.querySelectorAll(".pagination__btn--picked").forEach(function (activeBtn) {
      activeBtn.classList.remove("pagination__btn--picked");
    });
  }  

  clearPicked();
  // ставим указатель на выбранную страницу
  pickBtn.classList.add("pagination__btn--picked");
  //если кликнули по точкам 
  dots(firstItemNumber);
  if (pickBtn.previousSibling == null && pickBtn.textContent=="1") {
    return
  } else if (pickBtn.previousSibling == null && pickBtn.textContent != "1") {
    dots(Number(pickBtn.textContent) - 1);
    clearPicked();
    pickBtn.nextSibling.classList.add("pagination__btn--picked");
  } else if (pickBtn.nextSibling.textContent == "...") {
    dots(Number(pickBtn.textContent) - 1);
    clearPicked();
    pickBtn.previousSibling.classList.add("pagination__btn--picked");
  } else if (pickBtn.textContent == "...") {
    dots(Number(pickBtn.previousSibling.textContent));
    clearPicked();
    pickBtn.previousSibling.previousSibling.classList.add("pagination__btn--picked");
  } else if (pickBtn.textContent == String(lastPage)) {
    dots(lastPage - 4);
    clearPicked();
    pickBtn.classList.add("pagination__btn--picked");
  }
}

// слушаем клик на кнопках с цифрами
document.querySelectorAll(".pagination__btn").forEach(function (paginationBtn) {
  paginationBtn.addEventListener("click", function () {
    // если клик по странице, которая уже выбрана, то делаем ничего
    if (paginationBtn.classList.contains("pagination__btn--picked")) { 
      return 
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
  const countItems = document.querySelector(".pagination__items").childNodes.length - 2;
  const lastPage = document.querySelector(".pagination__items").childNodes[countItems];
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
