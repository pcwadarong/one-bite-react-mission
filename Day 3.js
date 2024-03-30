// Quiz 1 : 약수 구하기

let num = 100;
let arr = [];

for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        arr.push(i);
        if (i !== num / i) {
            arr.push(num / i);
        }
    }
}

console.log(arr.sort((a, b) => a - b).join(', ')); //'1, 2, 4, 5, 10, 20, 25, 50, 100'

// --------------------------------------
// Quiz 2 : 소수 판별기

function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
  
console.log(isPrimeNumber(1)); //false
console.log(isPrimeNumber(4)); //false
console.log(isPrimeNumber(11)); //true
console.log(isPrimeNumber(12)); //false

// --------------------------------------
// Quiz 3 : 계산기 (콜백함수)

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => Math.abs(num1 - num2);
const calculate = (num1, num2, operation) => {
    console.log(operation(num1, num2));
}

calculate(5, 3, add); //8
calculate(5, 3, subtract); //2
