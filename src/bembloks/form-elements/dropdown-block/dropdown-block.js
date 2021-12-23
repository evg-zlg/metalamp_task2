document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  if (!dropDownWrapper.classList.contains("dropdown-date")) {
    const dropDownBtn = dropDownWrapper.querySelector(".dropdown__select");
    const dropDownItems = dropDownWrapper.querySelector(".dropdown__items");
    const dropDownItem = dropDownWrapper.querySelector(".dropdown__item");
    const dropDownPlus = dropDownWrapper.querySelectorAll(".dropdown__btn:last-child");
    const dropDownMinus = dropDownWrapper.querySelectorAll(".dropdown__btn:first-child");
    const dropDownControl = dropDownWrapper.querySelector(".dropdown__control");
    const dropDownCount = dropDownWrapper.querySelector(".dropdown__count");
    let facilities = "2 спальни, 2 кровати...";
    let guests = "Сколько гостей";
    
    //функция подсчёта удобств, возращает текст для вставки в select (обрезанный)
    function countFacilities() {
      let countBed = Number(dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent);
      let countBedroom = Number(dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent);
      let countBathroom = Number(dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent);
      facilities = "";
      if (countBed > 0) {
        if (countBed == 1) {
          facilities = "1 спальня";
        } else if (countBed >=2 && countBed <= 4) {
            facilities = String(countBed) +" спальни";
        } else if (countBed > 4) {
          facilities = String(countBed) +" спален";
        }
        if (countBedroom > 0 || countBathroom > 0) {
          facilities = facilities + ", "
        }
      }
      if (countBedroom > 0) {
        if (countBedroom == 1) {
          facilities = facilities + "1 кровать";
        } else if (countBedroom >= 2 && countBedroom <= 4) {
            facilities = facilities + String(countBedroom)+" кровати";
        } else {
            facilities = facilities + String(countBedroom)+" кроватей";
        } 
        if (countBathroom > 0) {
          facilities = facilities + ", "
        }
      }
      if (countBathroom > 0) {
        if (countBathroom == 1) {
          facilities = facilities + "1 ванная комната";
        } else if (countBathroom >=2 && countBathroom <=4) {
            facilities = facilities + String(countBathroom)+" ванные комнаты";
        } else {
            facilities = facilities + String(countBathroom)+" ванных комнат";
        }
      }
      facilities = facilities.slice(0,20) + "..."
      return facilities;
    }

    //функция подсчета гостей, возвращает текст для вставки в select
    function countGuest() {
      let countAdult = Number(dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent);
      let countChild = Number(dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent);
      let countBaby = Number(dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent);
      guests = "";
      countAdults = countAdult + countChild;
      if (countAdults > 0) {
        if (countAdults == 1) {
          guests = "1 гость";
        } else if (countAdults >= 2 && countAdults <= 4) {
          guests = String(countAdults) + " гостя";
        } else {
          guests = String(countAdults) + " гостей";
        }
      } 
      if (countBaby > 0) {
        if (countAdults > 0) {
          guests = guests + ", ";
        }
        if (countBaby == 1) {
          guests = guests + "1 младенец";
        } else if (countBaby >= 2 && countBaby <=4) {
          guests = guests + String(countBaby) + " младенца";
        } else {
          guests = guests + String(countBaby) + " младенцев";
        }
      }
      if (countAdults == 0 && countBaby == 0) {
        guests = "Сколько гостей";
      }
      return guests;
    };
  //	Открыть / закрыть список
    dropDownBtn.addEventListener("click", function(){
      dropDownBtn.classList.toggle("dropdown__select--open");
      dropDownItems.classList.toggle("dropdown__items--open");
      // проверяем, есть ли кнопки
      if (dropDownItems.childNodes.length > 3) {
        // проверяем количества, если все 0 - прячем кнопку ОЧИСТИТЬ
        if (
          dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent == 0 &&
          dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent == 0 &&
          dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent == 0
        ) {
          dropDownItems.childNodes[3].childNodes[0].classList.add("btn--hide");
        } else {
          dropDownItems.childNodes[3].childNodes[0].classList.remove("btn--hide");
        };
      }
    })

  // Клик снаружи дропдауна. Закрыть дропдаун
  //  document.addEventListener("click", function (e) {
  //    if (e.target == dropDownWrapper) {
  //      console.log( e.target )
  //    } else {
  //      dropDownBtn.classList.remove("dropdown__select--open");
  //      dropDownItems.classList.remove("dropdown__items--open");
  //      console.log( e.target )
  //    }
  //    console.log( e.target )
  //  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__select--open");
        dropDownItems.classList.remove("dropdown__items--open");
      }
    });

  // Нажатие на +, добавляем 1, включаем минус
    dropDownPlus.forEach(function (e) {
      e.addEventListener("click", function () {
        let count = Number(e.parentNode.childNodes[1].textContent);
        if (count == 0) {
          e.parentNode.childNodes[0].classList.remove("dropdown__btn-disable");
          count ++;
        } else if (count > 0) {
          count ++;
        }
        e.parentNode.childNodes[1].textContent = String(count);
        // проверяем, есть ли кнопки
        if (dropDownItems.childNodes.length > 3) {
          // пишем в select количество гостей
          dropDownBtn.textContent=countGuest();
          // проверяем количества, если все 0 - прячем кнопку ОЧИСТИТЬ
          if (
            dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent == 0 &&
            dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent == 0 &&
            dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent == 0
          ) {
            dropDownItems.childNodes[3].childNodes[0].classList.add("btn--hide");
          } else {
            dropDownItems.childNodes[3].childNodes[0].classList.remove("btn--hide");
          };
        // если кнопок нет, значит это удобства
        } else {
          dropDownBtn.textContent=countFacilities();
        }
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
        // проверяем, есть ли кнопки
        if (dropDownItems.childNodes.length > 3) {
          // пишем в select количество гостей
          dropDownBtn.textContent=countGuest();
          // проверяем количества, если все 0 - прячем кнопку ОЧИСТИТЬ
          if (
            dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent == 0 &&
            dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent == 0 &&
            dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent == 0
          ) {
            dropDownItems.childNodes[3].childNodes[0].classList.add("btn--hide");
          } else {
            dropDownItems.childNodes[3].childNodes[0].classList.remove("btn--hide");
          } 
        // если кнопок нет, значит это удобства; выводим удобства в select
        } else {
          dropDownBtn.textContent=countFacilities();
        }  
      })
    })
    // Нажатие на ОЧИСТИТЬ, обнуляем все значения, включая проверку наличие кнопок
    if (dropDownItems.childNodes.length > 3) {
      const dropDownClearBtn = dropDownItems.childNodes[3].childNodes[0];
      const dropDownApplyBtn = dropDownItems.childNodes[3].childNodes[1];
      dropDownClearBtn.addEventListener("click", function () {
        dropDownItems.childNodes[0].childNodes[1].childNodes[1].textContent = 0;
        dropDownItems.childNodes[1].childNodes[1].childNodes[1].textContent = 0; 
        dropDownItems.childNodes[2].childNodes[1].childNodes[1].textContent = 0;
        dropDownItems.childNodes[3].childNodes[0].classList.add("btn--hide");
        dropDownItems.childNodes[0].childNodes[1].childNodes[0].classList.add("dropdown__btn-disable");
        dropDownItems.childNodes[1].childNodes[1].childNodes[0].classList.add("dropdown__btn-disable");
        dropDownItems.childNodes[2].childNodes[1].childNodes[0].classList.add("dropdown__btn-disable");
        dropDownBtn.textContent=countGuest();
      });
    
      // Нажатие на ПРИМЕНИТЬ, закрываем список
      dropDownApplyBtn.addEventListener("click", function () {
        dropDownBtn.classList.remove("dropdown__select--open");
        dropDownItems.classList.remove("dropdown__items--open");
      });
    }
    }
});
