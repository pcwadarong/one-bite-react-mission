// Quiz 1
const x = 15, y = 20;
let max = Math.max(x,y);
console.log(max);

// Quiz 2
const a = true;
switch (typeof(a)) {
    case 'number' :
        console.log('숫자');
        break;
    case 'string' :
        console.log('문자');
        break;
    case 'boolean' :
        console.log('불리언');
        break;   
    case 'undefined' :
        console.log('undefined');
        break;  
    case 'null' :
        console.log('null');
        break;   
    default:
        console.log(typeof(a));
        break;
}

// Quiz 3
let temperature = 10;

if (temperature < 0){
    console.log('매우 추움');
} else if (temperature < 10){
    console.log('추움');
} else if (temperature < 20){
    console.log('적당');
} else {
    console.log('더움');
}
