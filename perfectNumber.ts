/* write a function that takes a number and returns true or false
wether that number is a perfect number. a perfect number is a 
number whose factors are equal to the number.
Example is 6 as the sum of the factors of 6 are 3,2,1.
Bonus: Try to make your solution in Olog(n) time complexity if possible 
*/

function isNumberPerfect(num:number): Boolean {
    if(num <=2)
        return false;

    let sum: number = 0;
    let x: number = Math.ceil(num/2);

    while (x !== 1) {
        if(num % x === 0){
            sum += x;
        }
        x = Math.ceil(x/2);
    }
    return sum + 1 === num;
}

console.log(isNumberPerfect(28));