function createNewUser() {
    const firstName = prompt("Введите ваше имя:");
    const lastName = prompt("Введите вашу фамилию:");
    const birthdayString = prompt("Введите вашу дату рождения (в формате dd.mm.yyyy):");

    // Разделяем дату рождения на отдельные компоненты (день, месяц, год)
    const [day, month, year] = birthdayString.split('.');

    // Создаем объект Date с использованием компонентов даты рождения (месяцы в JavaScript начинаются с 0)
    const birthday = new Date(year, month - 1, day);

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getAge: function () {
            const today = new Date();
            let age = today.getFullYear() - this.birthday.getFullYear();
            const monthDiff = today.getMonth() - this.birthday.getMonth();

            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthday.getDate())) {
                age--;
            }

            return age;
        },
        getPassword: function () {
            const firstLetter = this.firstName.charAt(0).toUpperCase();
            const lastNameLower = this.lastName.toLowerCase();
            const birthYear = this.birthday.getFullYear();

            return firstLetter + lastNameLower + birthYear;
        }
    };

    return newUser;
}

const user = createNewUser();
console.log(user);
console.log("Возраст пользователя:", user.getAge());
console.log("Пароль пользователя:", user.getPassword());
