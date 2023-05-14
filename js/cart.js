// =================================================================================
// Корзина final
// =================================================================================

// Добавляем товар в корзину

// 1. отслеживаем клик на всей странице (window)

// 2. проверяем что клик был совершен по кнопке 
//    <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в кошик</button>
//    с дата-атрибутом data-cart

// 3. Находим карточку товара внутри которой мы совершили клик - ищем родителя по классу
//    ".card"

// 4. Cобираем данные с этого товара и записываем их в единый обьект productInfo {}

// 5. Реализация добавления нескольких одинаковых товаров в корзину, что бы их количество
//    суммировалось, а они не дублировались
//    Проверяем по id, есть ли такой товар в корзине. Ищем товар в корзине с data-id

// 6. Создаем шаблон элемента (<div class="cart-item")для отображения товара в корзине
//    Размещаем в шаблон элемента все данные из обьекта productInfo {}
//    Добавляем шаблон в обертку корзины

// =================================================================================

// находим обертку корзины
const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {

    const card = event.target.closest(".card");

    // собираем данные с этого товара и записываем их в единый обьект productInfo {}
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      // itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    // проверяем по id, есть ли такой товар в корзине
    // в `[data-id="${productInfo.id}"]` добавляем id обьекта productInfo {}, который
    // мы собираемся добавить
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    // есть ли товар в корзине, нам необходимо найти значение счетчика товара в
    // корзине const counterElement = itemInCart.querySelector('[data-counter]');
    // складываем значение счетчика в корзине со значением счетчика товара который
    // мы выбираем
    // если здесь будет не false, не null а будет html элемент - то выполниться
    // код в {}, в противном случае он не выполниться

    // берем id из обьекта productInfo{} добавляемого товара, и проверяем, есть ли в 
    // корзине товар с таким id, для этого ищем в корзине элемент 
    // const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    // с id добавляемого товара и если true - находим в корзине элемент счетчика 
    // const counterElement = itemInCart.querySelector("[data-counter]") и плюсуем значения
    // кол - ва товаров
    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      // если товара нет в корзине
      const cartItemHTML = `
        <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.weight}</div>

                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>`;

      // добавляем шаблон в обертку корзины
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    // в карточке товара сбрасываем счетчик добавленного товара на 1
    card.querySelector('[data-counter]').innerText = '1';

    // отображение статуса корзины пуста / полная
	  // будет вызываться при нажатии кнопки добавить
    toggleCardStatus();

	  // запуск подсчета в корзину
    calcCartPriceAndDelivery();
  }
});
