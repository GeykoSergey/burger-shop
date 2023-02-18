// ========================================================================
// Функция для определения колличества товара в корзине и отображения 
//  статуса корзины - пусто, отображения элемента оформить заказ
// ========================================================================

// ('.cart-wrapper') - оболочка продуктов в корзине
// ('[data-cart-empty]') - элемент - корзина пуста
// ('#order-form') - элемент - оформить заказ

function toggleCardStatus() {
    
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cardEmptyBage = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    // если колличество детей > 0
    if (cartWrapper.children.length > 0) {
        cardEmptyBage.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cardEmptyBage.classList.remove('none');
        orderForm.classList.add('none');
    }
}