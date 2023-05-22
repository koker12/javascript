const displayArrayAsList = (array) => {
    const listElement = document.getElementById('list');

    listElement.innerHTML = array.map(item => `<li>${item}</li>`).join('');
}

const array = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
displayArrayAsList(array);

