//SECTION 1: Create 4 functions for the 4 main mathematical operations (-,+,/,*). Return the calculated value and then output it to the screen.

//First I defined a variables
let myVariable =2*2
let num1=5
let num2=10
let num3=0

//For the addition operation I defined a function called addNumber. When I called the function, I tested different values for each variable
function addNumber(){
    console.log((myVariable+5)*myVariable);
}
addNumber();

//Unit Test 1: tested to make sure that myVariable+5 will console.log 9
//Unit Test 2: console.log(myVariable+5*myVariable): tested to see if will result in the answer being 36, but the console.log reflected 24
//Unit Test 3: console.log((myVariable+5)*myVariable): added a parenthesis to see if the console.log would reflect 36 (correct answer)



//For the subtraction operation I defined a function called subtractNumber. When I called the function, I tested different values for each variable.
function subtractNumber(){
    console.log(num1-num2);
}
subtractNumber();
//Unit Test 1: console.log(num1-num2): tested to see if will result in the answer being -5 (correct answer)
//Unit Test 2: console.log(myVariable-num1/2): tested to see if typing this equation would result in -0.5, but console reflected 1.5
//Unit Test 3: console.log((myVariable-num1)/2): tested to see if typing this equation would result in -0.5 (correct answer)


//For the multiplication operation I defined a function called multiplyNumber. When I called the function, I tested different values for each variable
function multiplyNumber(){
    console.log(myVariable*num1);
}
multiplyNumber();

//Unit Test 1: console.log(myVariable*num1) while also trying to pass the argument mutiplyNumber(num1): tested resulted in NaN
//Unit Test 2: console.log(multiplyNumber) :test resulted in console.log reflecting "[Function: multiplyNumber]"
//Unit Test3: console.log (myVariable*num2) :test resulted in an answer of 40 (correct answer)


//For the division operation I defined a function called divideNumber. When I called the function, I tested different values for each variable
function divideNumber(){
    console.log(num1/num3);
}
divideNumber();

//Unit Test 1: console.log(num1/num3) :test resulted in ERROR due to num3=0
//Unit Test 2: console.log(myVariable/num1) :test resulted in console.log reflecting 0.8 (correct answer)
//Unit Test 3: console.log(num2/num1): test result 2 (correct answer)

//Section 2:
//For this example, I defined a variable called name. When I called the function, I printed "Hello,<name>!".
const name= "John Doe";

function printName(){

console.log("Hello,"+name+"!")
}
printName();


//Alternatively, I can use the function greet() to print the following output: "Hello,Jane Doe!" by passing the parameter "Jane Doe" to the function.
function greet(name){
    console.log("Hello," +name+"!");
}
greet("Jane Doe");

//Unit Test: console.log(Hello+name+"!") results in ERROR
//Unit Test: console.log"(Hello",+name+"!") results in ERROR for unexpected strings because the comma isn't with quotes
//Unit Test 3: ran code as diplayed result was Hello,John Doe! (correct answer)