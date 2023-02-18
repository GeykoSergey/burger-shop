// =================================================================================
// Счетчик карточки товара v.1
// =================================================================================

<div class="items counter-wrapper">
  <div class="items__control" data-action="minus">-</div>
  <div class="items__current" data-counter>1</div>
  <div class="items__control" data-action="plus">+</div>
</div>

window.addEventListener('click', function (event) {

      // проверяем, является ли элемент по которому был совершен клик кнопкой плюс
      // проверяем по наличию дата-атрибута data-action="plus"
      if (event.target.dataset.action === 'plus') {
          // находим ближайшего родителя кнопки плюс, по селектору которому 
          // соответствует класс ('.counter-wrapper') и записываем в переменную
          const counterWrapper = event.target.closest('.counter-wrapper');
          // далее от этого родителя находим див с числом счетчика
          // <div class="items__current" data-counter>1</div> по дата атрибуту
          // и записываем в переменную
          const counter = counterWrapper.querySelector('[data-counter]');
          // увеличиваем значение
          counter.innerText = ++counter.innerText;
      }
  
      // проверяем, является ли элемент по которому был совершен клик кнопкой минус
      if (event.target.dataset.action === 'minus') {
  
          const counterWrapper = event.target.closest('.counter-wrapper');
  
          const counter = counterWrapper.querySelector('[data-counter]');

          if ( parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
          }
      }
  });
  
  // НЮАНС!!!!!!!!!!!!!!!!!
  // если мы кликаем не по счетчику (в любом другом месте) мы пытаемся найти родителя 
  // счетчика const counterWrapper = event.target.closest('.counter-wrapper');
  // а его нет, а потом в родителе которого мы не нашли мы пытаемся запустить метод  
  // querySelector const counter = counterWrapper.querySelector('[data-counter]');
  // так как враппер не был найден то вернулся null, а у null нет метода querySelector
  
  // перед тем как искать обертку счетчика нам стоит сделать проверку,
  // действительно ли мы кликнули внутри счетчика