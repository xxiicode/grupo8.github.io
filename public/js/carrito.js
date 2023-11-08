const add = document.querySelector('#x');
const subtract = document.querySelector('#x');
const quantity = document.querySelector('#x');

add.addEventListener('click', () => quantity.value = Number(quantity.value) +1);
subtract.addEventListener('click', () => {
    if (quantity.value > 0)
    quantity.value = Number(quantity.value) -1
});
