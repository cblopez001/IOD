// Module 3_Lab 3 Question 1
function makeCounter(startFrom=0, increments=0) {
    let currentCount = startFrom;
    return function() {
    currentCount += increments;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter(5,3);
    counter1(); // 1
    counter1(); // 2
    
    let counter2 = makeCounter(4,2);
    counter2();
    counter2();

// Module 3_Lab 3 Question 2

    /* the order that the messages will be printed is #4,#3,#2,#1 because 100 milliseconds is longer than than 0 milliseconds.*/
    delayMsg=(msg)=> console.log(`This message will be printed after a delay: ${msg}`)

    setTimeout(delayMsg,15000, '#5: Delayed by 15000ms');
    setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
    setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
    setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
    delayMsg('#4: Not delayed at all');

// Module 3_Lab 3 Question 3

// Module 3_Lab 3 Question 4

// Module 3_Lab 3 Question 5

// Module 3_Lab 3 Question 6
    
// Module 3_Lab 3 Question 7

// Module 3_Lab 3 Question 8

// Module 3_Lab 3 Question 9

function randomDelay(){
const delay=Math.ceil(Math.random()* 20) *1000;
return new Promise((resolve, reject) => 
    setTimeout(
    delay % 2===0 ? resolve : reject,
    delay,
    delay
    (b= Math.random()*10)
    )
);
}

randomDelay()
.then((delay, b)=>
     console.log(
        'There appears to be a delay of ${delay} ms. This is ${b}, a second argument')
    )
    .catch(() =>
        console.log('Failed to delay'));
