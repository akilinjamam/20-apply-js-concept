// factorial reverse by while loop

function getFactorialNumber(number) {
    let factorial = 1;
    i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial
}

let firstFactorial = getFactorialNumber(6);
console.log(firstFactorial);

// factorial reverse by for loop

function getFactorialNumber(number) {
    let factorial = 1;
    for (i = number; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial
}


let secondFactorial = getFactorialNumber(7);
console.log(secondFactorial);

