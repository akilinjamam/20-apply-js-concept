function getFactorialNumber(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial
}


let firstFactorial = getFactorialNumber(7);
console.log(firstFactorial);

let secondFactorial = getFactorialNumber(9);
console.log(secondFactorial);

let thirdFactorial = getFactorialNumber(11);
console.log(thirdFactorial);


// factorial through while loop

function getFactorialNumber(number) {
    let factorial = 1;
    let i = 1;
    while (i < number) {
        factorial = factorial * i;
        i++
    }
    return factorial
}


let firstFactorial = getFactorialNumber(6);
console.log(firstFactorial);