window.onload = function () {
    const priceInput = document.getElementById('price-input');

    priceInput.addEventListener('focus', function () {
        priceInput.classList.remove('error');
        priceInput.classList.add('success');
    });

    priceInput.addEventListener('blur', function () {
        const price = parseFloat(priceInput.value);

        if (price < 0 || isNaN(price)) {
            priceInput.classList.add('error');
            priceInput.value = '';
            alert('Please enter correct price.');
        } else {

            const priceContainer = document.querySelector('.price-container');
            const priceValue = document.createElement('span');
            const deleteButton = document.createElement('span');

            priceValue.classList.add('price-value');
            deleteButton.classList.add('delete-btn');
            deleteButton.innerHTML = 'X';

            priceValue.textContent = `Текущая цена: ${price}`;
            priceContainer.appendChild(priceValue);
            priceContainer.appendChild(deleteButton);

            deleteButton.addEventListener('click', function () {
                priceContainer.removeChild(priceValue);
                priceContainer.removeChild(deleteButton);
                priceInput.value = '';
            });
        }
    });
};
