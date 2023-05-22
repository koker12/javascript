// Считываем имя пользователя
const name = prompt("Введите ваше имя:");

// Считываем возраст пользователя
const age = parseInt(prompt("Введите ваш возраст:"));

// Проверяем возраст и выводим соответствующее сообщение
if (age < 18) {
    alert("You are not allowed to visit this website.");
} else if (age >= 18 && age <= 22) {
    const confirmation = confirm("Are you sure you want to continue?");
    if (confirmation) {
        alert("Welcome, " + name + "!");
    } else {
        alert("You are not allowed to visit this website.");
    }
} else {
    alert("Welcome, " + name + "!");
}
