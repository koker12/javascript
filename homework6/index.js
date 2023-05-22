function filterBy(arr, dataType) {
    return arr.filter(item => typeof item !== dataType);
}

const array = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(array, 'string');
console.log(filteredArray);
