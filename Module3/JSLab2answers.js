// Module 3_Lab 2 Question 1

const capLetters= function (sentence){
  let str=sentence.split(" ");
  for (let i=0; i < str.length; i++){
    str[i]=str[i][0].toUpperCase()+ str[i].substring(1);
  };
  return str.join(" ");
}

console.log(capLetters("new york"));
console.log(capLetters("los angeles"));
console.log(capLetters("new delhi"));

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

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// Module 3_Lab 2 Question 5
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?


// Module 3_Lab 2 Question 6

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

Array.prototype.unique = function(){
    return Array.from(new Set(this));
  }


// Module 3_Lab 2 Question 7
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];
  
  let bookId=4;
  
  function getBookTitle(bookId){
  let title = books.find(item => item.id ==bookId);
  console.log (title.title);
  }
  
  getBookTitle(bookId); 
  
  function getOldBooks(){
  let bookYear = books.filter(item => item.year < 1950);
  console.log (bookYear);
  }
  
  getOldBooks();
  
  function addGenre(){
  let genre = books.map(item => item.genre="classics");
  console.log (books);
  }
  
  addGenre();

  function getBookTitles(authorInitial){
    const findAuthor = books.filter(((author)) => author.startsWith(authorInitial));
    const bookTitles = findAuthor.map(book => book.title);
    return bookTitles;
  }
  
  console.log(getBookTitles('J'));

  function latestBook(){
    const bookYear=[];
    let newBook=0;
    books.forEach(book => bookYear.push(book.year));
    bookYear.find((year) => {
      if (year > newBook){
        newBook=year;
      }
    })
    return newBook;
  }



// Module 3_Lab 2 Question 8
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
phoneBookABC.set('Caroline', '1112224536')
console.log(phoneBookABC);


const phoneBookDEF = new Map()
phoneBookDEF.set('Deryshelle', '3439874651')
phoneBookDEF.set('Emily', '03498461384')
phoneBookDEF.set('Frederick', '0437528736')

console.log(phoneBookDEF);


function printPhoneBook(phoneBookABC, phoneBookDEF) { 
  let combinedMap = new Map([...phoneBookABC]); 

  phoneBookDEF.forEach((value, key) => { 
      if (combinedMap.has(key)) { 
          combinedMap.set(key, combinedMap.get(key) + value); 
      } else { 
          combinedMap.set(key, value); 
      } 
  }); 

  return combinedMap; 
} 

console.log(printPhoneBook(phoneBookABC, phoneBookDEF));

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

console.log (today.getHours() + ' hours have passed so far today');
console.log (today.getMinutes() + ' minutes have passed so far today');
console.log (today.getSeconds() + ' seconds have passed so far today');


let dob = new Date(1994,22,04);

    function calcDate(today,dob) {
        let diff = Math.floor(today.getTime() - dob.getTime());
        let day = 1000 * 60 * 60 * 24;

        let days = Math.floor(diff/day);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);
       console.log('I am '+ years +' years,'+ months + ' months and '+ days + " old.");
        }
        
        calcDate(today,dob);