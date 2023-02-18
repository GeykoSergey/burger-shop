// =================================================================================
// Счетчик карточки товара final
// =================================================================================

// отслеживаем любой клик на всей странице
// затем проверяем, был клик по кнопке минус либо по кнопке плюс
// если клик был совершен по одной из этих кнопок,найдем родителя этих кнопок,
// <div class="items counter-wrapper">, далее от этого родителя мы найдем
// <div class="items__current" data-counter>1</div> и изменим именно его
// добавляем прослушку на всем окне

// Уменьшение колличества товара в корзине. Удаление товара из корзины
// Определяем что клик по кнопке минус был совершен в корзине. Для этого проверяем,
// лежит ли данная кнопка минус в блоке <div class="cart-wrapper"></div> и также
// проверяем, если колличество товара === 1, удаляем товар из корзины

window.addEventListener('click', function (event) {
    // обьявляем переменную для счетчмка
    let counter;
    // проверяем был ли совершен клик строго по кнопкам минус либо плюс, находим родителя,
    // находим от родителя счетчик
    // искать родителя кнопки по которой кликнули и искать от родителя счетчик следует 
    // после того, как мы кликнули по кнопке плюс либо по кнопке минус 
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }
    // проверяем, является ли элемент по которому был совершен клик кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // проверяем, является ли элемент по которому был совершен клик кнопкой минус
    if (event.target.dataset.action === 'minus') {
        // изменяем значение в сетчике минус один
        if ( parseInt(counter.innerText) > 1 ) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        // проверка на товар который находится в козине
        // находим родителя кнопки, и удаляем его
        event.target.closest('.cart-item').remove();

        // проверка и отображение статуса корзины пуста / полная
        toggleCardStatus();

        calcCartPriceAndDelivery();

        // проблема!!!!! после удаления последнего товара из корзины
        // корзина пуста, а стоимость последнего товара остается
        // calcCartPrice () - мы запускаем также сдесь, т к козина  будет уже 
        // пуста, и дальнейший код не выполниться  
        // if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //     // пересчет общей стоимости товаров в корзине
        //     calcCartPrice();
        // }
        // т к данный event.target перестанет существовать, и calcCartPrice() не запуститься
        }
    }

    // проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();
    }
    // при нажатии на кнопку минус, если у товара значение больше еденицы то
    // уменьшаем значение на единицу и else if уже не отрабатывает, потому что
    // выполнился первый блок кода
    // в ином случае если у товара значение счетчика 1 
    //    if ( parseInt(counter.innerText) > 1 ) {
    //    counter.innerText = --counter.innerText; - этот блок кода не 
    // отрабатывает и программа переходит к else if
    //  и если он действительно находится в корзине else if (event.target.closest('.cart-wrapper')
    // и его значение действительно еденица  && parseInt(counter.innerText) === 1)
    // то тогда мы его удаляем event.target.closest('.cartItem').remove();


});





//  <div class="items items--small counter-wrapper">
{/* <div class="items__control" data-action="minus">-</div> */}
{/* <div class="items__current" data-counter="">1</div> */}
{/* <div class="items__control" data-action="plus">+</div> */}
// </div>

// (event.target) - получаем тот элемент по которому кликнули
// для того чтобы обратиться к его дата атрибуту action 
// необходимо использовать свойство dataset и затем идет название 
// дата атрибута action (без слова data data-action="minus")
// и мы получим значение action - те minus

// затем определяем конкретный счетчик по которому кликнули
// находим родителя кнопки
// const counterWrapper = event.target.closest('.counter-wrapper');
// event.target - уже содержит кнопку по которой кликнули
// closest - метод определяющий ближайшего родителя соответствующего
// выбранному селектору ('.counter-wrapper')
// теперь внутри родителя нам необходимо найти data-counter это
// поле вывода значения
// обращаемся к родителю const counterWrapper и по селектору находим
// его
