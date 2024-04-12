//SECTION 1: Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen.

//First I defined a variable called number1 and number2. 
const number1 = 10;
const number2 = 2;

//For the addition operation I defined a function called addNumber. When I called the function, I printed the sum of the two numbers.
function addNumber(){
    console.log(number1+number2);
}
addNumber();


//For the subtraction operation I defined a function called subtractNumber. When I called the function, I printed the difference of the two numbers.
function subtractNumber(){
    console.log(number1-number2);
}
subtractNumber();


//For the multiplication operation I defined a function called multiplyNumber. When I called the function, I printed the product of the two numbers.
function multiplyNumber(){
    console.log(number1*number2);
}
multiplyNumber();


//For the division operation I defined a function called divideNumber. When I called the function, I printed the quotient of the two numbers.
function divideNumber(){
    console.log(number1/number2);
}
divideNumber();

//For this example, I defined a variable called name. When I called the function, I printed "Hello,<name>!".
const name= "John Doe";

function printName(){

console.log("Hello,"+name+"!")
}
printName();

// The Console is reflecting he following output: 12,8,20,5,"Hello,John Doe!"

//Alternatively, I can use the function greet() to print the following output: "Hello,Jane Doe!" by passing the parameter "Jane Doe" to the function.
function greet(name){
    console.log("Hello," +name+"!");
}
greet("Jane Doe");