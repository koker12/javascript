document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs-title");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab, index) {
        tab.addEventListener("click", function() {
            // Удаляем класс "active" у всех вкладок
            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            });

            // Удаляем класс "active" у всех блоков с содержимым вкладок
            tabContents.forEach(function(content) {
                content.classList.remove("active");
            });

            // Добавляем класс "active" текущей вкладке и соответствующему блоку с содержимым
            tab.classList.add("active");
            tabContents[index].classList.add("active");
        });
    });
});
