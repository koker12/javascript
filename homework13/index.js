function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'theme-dark') {
        // Если текущая тема - темная, переключаем на светлую
        body.classList.remove('theme-dark');
        localStorage.setItem('theme', 'theme-light');
    } else {
        // Если текущая тема - светлая или не установлена, переключаем на темную
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'theme-dark');
    }
}

// Обработчик нажатия на кнопку "Сменить тему"
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', toggleTheme);

// Проверяем сохраненную тему при загрузке страницы и применяем ее
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'theme-dark') {
    document.body.classList.add('theme-dark');
}
