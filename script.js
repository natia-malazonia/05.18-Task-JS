//Task 1
alert("Sum of numbers 0-10")
let sum = 0;
for (let i = 1; i<=10; i++) {
    sum += i;
}
alert(sum);

//task 2
let x = parseInt(prompt('Enter first number'));
let y = parseInt(prompt('Enter last number'));
let evens = "", odds = "";

for (; x <= y; x++) {
    if (x % 2 == 0) {
        evens += x + " ";
    } else {
        odds += x + " ";
    }
}
 alert(`Evens: ${evens}\nOdds: ${odds}`);


//task 3
alert('Enter the range')
let i = parseInt(prompt('Enter first number'));
let b = parseInt(prompt('Enter last number'));
let numberRange = '';
if (i < b) {
    for (; i <= b; i++) {

        if (i>7 && i%7 == 3){
            numberRange += i + ' ';

        }  
    }
    alert(numberRange);
}


//task 4
alert('Get number square')
let number = parseInt(prompt('Enter a number'));
let squareResult = 1;
if (number !== 0) {
    for (let i = 0; i < 2; i++) {
        squareResult *= number;
    }
    alert(squareResult + ' number square');

    //cube
    let cubeResult = 1;
    for (let i = 0; i <= 2; i++) {
        cubeResult *= number;
    }
    alert(cubeResult + ' number cube');
}


//task 5
alert('Get number factorial');
let fNumber = parseInt(prompt('Enter a number'));
let factorialResult = 1;
for (let i = 2; i<=fNumber; i++) {
    factorialResult *= i;
} 
alert(factorialResult);