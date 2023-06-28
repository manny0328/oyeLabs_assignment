const arr = Array.from({ length: 100 }, (_, index) => index + 1); 
const sumOfNumbers = (100 * 101) / 2; 
const sumOfArray = arr.reduce((acc, curr) => acc + curr, 0); 

const missingNumber = sumOfNumbers - sumOfArray;
console.log('Missing number:', missingNumber);
