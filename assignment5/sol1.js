function sum(arr) {
    const newArr = arr.filter(element => element > 20);

    const sum = newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

const numbers = [100, 25, 50, 45, 15];
const result = sum(numbers);
console.log(result);