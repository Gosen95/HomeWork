//Given a number. Print “odd” if the number is odd and “even” if it’s even. 

const numb = 123;

if (numb % 2 === 0) {
   console.log("even");
} else {
   console.log("odd");
}

//2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let numb1 = 3;
let numb2 = 14;
if(numb1 % numb2 === 0 || numb2 % numb1 === 0){
console.log(1);
}
else{
console.log(0);
}


/*4. Given five numbers as input. Calculate and print the average of the numbers(without
   using arrays).*/

let numb1 = Number(prompt());
let numb2 = Number(prompt());
let numb3 = Number(prompt());
let numb4 = Number(prompt());
let numb5 = Number(prompt());

let result = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;

alert(result );

/*5. Given the following code rewrite it using only two if operators. (Hint: use logical
operators).*/

let n = +prompt();
let i = 0;
let j = 0;

if (n % 2 === 0 && !Math.floor(n / 10)) {
  i += 1;
}

if (n % 3 === 0 && n % 10 === 1) {
  j += 1;
}




let inputNumber = prompt("Enter a positive integer: ");
inputNumber = Number(inputNumber);

if (inputNumber <= 9) {
    console.log(inputNumber);
} else {
    let lastDigit = inputNumber % 10;

    if (lastDigit !== 0) {
        let remainingDigits = Math.floor(inputNumber / 10);
        let newNumber = lastDigit * Math.pow(10, Math.floor(Math.log10(remainingDigits)) + 1) + remainingDigits;
        console.log("Result:", newNumber);
    } else {
        console.log("Result:", inputNumber);
    }
}