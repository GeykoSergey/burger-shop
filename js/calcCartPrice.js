// ====================================================================
// подсчет суммарного значения стоимости товаров в корзине
// ====================================================================
// Берем колличество товара и умножаем на цену


function calcCartPriceAndDelivery() {

  const cartItems = document.querySelectorAll('.cart-item');
  // ('.cart-item') - отдельный товар в корзине, ищем все
  const totalPriceEl = document.querySelector('.total-price');
  // ('.total-price') - суммарное значение покупки
  const deliveryCost = document.querySelector('.delivery-cost');

  const cartDeliveryEl = document.querySelector('[data-cart-delivery]');

  let totalPrice = 0;

// const cartItems = document.querySelectorAll('.cart-item');
// находим все карточки товаров в корзине и перебираем

  cartItems.forEach(function (item) {
    const amountEl = item.querySelector('[data-counter]');
    // ('[data-counter]') - значение счетчика товара
    const priceEl = item.querySelector('.price__currency');
    // ('.price__currency') - стоимость товара
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

    totalPrice += currentPrice;
  });

    console.log(totalPrice)
    // отображаем цену на странице
    totalPriceEl.innerText = totalPrice;

    if (totalPrice > 0) {
        cartDeliveryEl.classList.remove('none');
    } else {
        cartDeliveryEl.classList.add('none');
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = ('безкоштовно');
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '125 грн'
    }
    
}
// const amountEl = item.querySelector('[data-counter]');
// ищем элемент содержащий значение счетчика товара

// const priceEl = item.querySelector('price__currency');
// находим элемент содержащий стоимость

// стоимость конкретного товара в корзине
// const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

// суммируем значения стоимости товаров
// totalPrice += currentPrice;

// подсчитывать стоимость нам необходимо когда мы добавляем товар в корзину