// Считываем число от пользователя
const userInput = parseInt(prompt("Введите число:"));

// Проверяем, что введено корректное число
if (Number.isNaN(userInput)) {
    console.log("Некорректный ввод числа.");
} else {
    let numbers = [];

    // Находим все числа кратные 5
    for (let i = 1; i <= userInput; i++) {
        if (i % 5 === 0) {
            numbers.push(i);
        }
    }

    // Выводим результаты
    if (numbers.length > 0) {
        console.log("Числа кратные 5:");
        console.log(numbers);
    } else {
        console.log("Sorry, no numbers.");
    }
}
