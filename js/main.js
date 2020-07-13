let num1 = 2;
let num2 = 5;


function biggerNumber(number1, number2){
    let result = number1 < number2;
    
    if (number1 > number2) {
        result = number1;
    } else {
        result = number2;
    }
    return result;
}

let result = biggerNumber(num1, num2);

console.log(result);