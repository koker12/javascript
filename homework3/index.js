// Функция для выполнения математической операции
const calculate = (num1, num2, operator) => {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Некорректная операция.");
            return;
    }

    console.log("Результат:", result);
}

// Считываем числа от пользователя
const number1 = parseFloat(prompt("Введите первое число:"));
const number2 = parseFloat(prompt("Введите второе число:"));

// Считываем операцию от пользователя
const operation = prompt("Введите операцию (+, -, *, /):");

// Вызываем функцию calculate с введенными значениями
calculate(number1, number2, operation);
