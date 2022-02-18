
// conditional

var bookPrice = 200;
var myPocket = 300

// if (myPocket > bookPrice) {
//     console.log('i will buy this book')
// }

// else {
//     console.log('please mamma give me a discount please')
// }

// variable has 5 things

var name = 'this is Akil Injamam';
var number = 500;
var myPocket = true;

//  array

var items = ['bag', 'watch', 'cap', 'googles', 'chain', 'jacket'];

// finding out the position by puting name in
// var index = items.indexOf('chain');

// // finding out the element by puting position number in
// var index = items[5];

// console.log(index);
// console.log(items);


// while loop

var number = 0;

// while (number < 10) {
//     console.log(number);
//     number++;
// }

// // for loop

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// object

var mobile = {
    price: 22000,
    storage: '32gb',
    ram: '4gb',
    brand: 'vivo',
}

// showing all
console.log(mobile);

// showing specific properties
console.log(mobile.price);


// updating a specific property way 1

mobile.price = 26000;
console.log(mobile);

// updating a specific property way 2

mobile.price = 26000;
mobile['price'] = 30000;
console.log(mobile)

// updating a specific properties way 3

var mobilePrice = 'price';
mobile[mobilePrice] = 32000;
console.log(mobile);

// values of variable could change

let price = 26;
price = 29;
price = 12;

// value of the varible will not change.

const myName = 'lal e lal mr. helal';
console.log(myName);
myName = 22;












