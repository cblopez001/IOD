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

    // Module 3_Lab 3 Question 3

    // Module 3_Lab 3 Question 4

    // Module 3_Lab 3 Question 5
