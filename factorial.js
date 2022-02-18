/*

5! 5 X 4 X 3 X 2 X 1
6! 6 X 5 x 4 x 3 x 2 x 1
7! 7 x 6 x 5 x 4 x 3 x 2 x 1
8! 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1


*/

var factorial = 1;
for (var i = 1; i <= 5; i++) {
    factorial = factorial * i;
}

console.log(factorial) 
