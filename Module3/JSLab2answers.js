// Module 3_Lab 2 Question 1

const capLetters= function (sentence){
  let str=sentence.split(" ");
  for (let i=0; i < str.length; i++){
    str[i]=str[i][0].toUpperCase()+ str[i].substring(1);
  };
  return str.join(" ");
}

console.log(capLetters("new york"));

// Module 3_Lab 2 Question 2
//Part A
function truncate(str, max) {
    let truncated = "";
    if (str.length > max){
      truncated = str.slice(0,max)+ "...";
      }
    else{
      return str;
    }
    return truncated;
  }
  
console.log(truncate("JavaScript is killing me!",13))
//PART B
const truncateV2= (str, num) => str.length > num ? `${str.substring(0, num)}...` : str;

console.log(truncateV2("JavaScript is killing me!",13));

// Module 3_Lab 2 Question 3

const animals = ['Tiger', 'Giraffe'];

animals.push('Dog','Cat');
animals.unshift("Ferret","Bat");
animals.sort();

function replaceMiddleAnimal(newValue){
animals.splice(3,1,newValue);
}

replaceMiddleAnimal("Goat");
console.log(animals);

// Module 3_Lab 2 Question 4


// Module 3_Lab 2 Question 5

// Module 3_Lab 2 Question 6

// Module 3_Lab 2 Question 7

// Module 3_Lab 2 Question 8

// Module 3_Lab 2 Question 9

let salaries= {
    Timothy: 35000,
    David: 25000,
    Mary: 55000,
    Christina: 75000,
    James: 43000,
  };

  function sumSalaries(salaries) {
   let sum=0;
    Object.values(salaries).forEach(salary => sum += salary);
    return sum;
  }
      console.log('Sum of Salaries: ${sumSalaries(salaries)}')

function topEarner(salaries) {
    let topSalary = 0;
    let topEarner = '';
    for (let name in salaries) {
        if (salaries[name] > topSalary) {
            topSalary = salaries[name];
            topEarner = name;
        }
}
}

console.log('Top Earner: ${topEarner(salaries)}');

// Module 3_Lab 2 Question 10

const today = new Date();
console.log ("Current time is " + today.toLocaleTimeString());

console.log (today.getHours() + 'hours have passed so far today');