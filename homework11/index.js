const buttons = document.querySelectorAll('.btn');

// Функция для удаления активного класса у всех кнопок
function clearActiveButtons() {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

// Слушатель события keydown для отслеживания нажатия клавиш клавиатуры
document.addEventListener('keydown', event => {
    const key = event.key.toUpperCase(); // Приводим нажатую клавишу к верхнему регистру

    buttons.forEach(button => {
        if (button.dataset.key === key) {
            // Если нажатая клавиша соответствует кнопке, добавляем ей активный класс
            clearActiveButtons();
            button.classList.add('active');
        }
    });
});
