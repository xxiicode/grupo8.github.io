const add = document.querySelector('#item-sumar');
const subtract = document.querySelector('#item-restar');
const quantity = document.querySelector('#quantity');

add.addEventListener('click', () => quantity.value = Number(quantity.value) +1);
subtract.addEventListener('click', () => {
    if (quantity.value > 0)
    quantity.value = Number(quantity.value) -1
});
