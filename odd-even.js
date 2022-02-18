const myNumber = 12
const oddOrEven = myNumber % 2;


if (oddOrEven == 0) {
    console.log('yes this is even number');
}

else {
    console.log('No this is odd number')
}





// if even
function isEven(numbers) {
    if (numbers % 2 == 0) {
        return true
    }
    return false
}

const myNumber = 24

const isThisEven = isEven(myNumber);
console.log('this is even number', isThisEven)


// if odd
function isOdd(number) {
    if (number % 2 != 0) {
        return true
    }
    return false
}

const myyNumber = 24

const isThisOdd = isOdd(myyNumber);
console.log('this is odd number', isThisOdd)
