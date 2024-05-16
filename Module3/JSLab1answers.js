// Module 3_Lab 1 Question 1 ---answers are on READ ME file ---

// Module 3_Lab 1 Question 2 ---answers are on READ ME file ---
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four
let multiplication = three * four
let division = three / four
let subtraction = three - four
let lessThan1 = three < four
let lessThan2 = thirty < four

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

// Module 3_Lab 1 Question 3 ---answers are on READ ME file ---

// Module 3_Lab 1 Question 4

let a=6
let b=6
let result= `${a} + ${b}` + " is";

function getPhrase(){
    return (a+b < 10)? result += ' Less than  10' : result += " Greater than 10"; 
}

console.log(getPhrase());

// Module 3_Lab 1 Question 5

let name= "Cherakye"
getGreeting=()=> "Hello " + name + " !";
console.log(getGreeting());

// Module 3_Lab 1 Question 6

const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase(person){
    return (person.numFingers === 6) ? 'You killed my Father. Prepare to Die!':'Nice to meet you.';
    }
    }

    inigo.greeting(westley)
    inigo.greeting(rugen)

// Module 3_Lab 1 Question 7

const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    },
    finalScore(){
        console.log('Final score is '+this.score);
    }
    }
    //modify each of the above object methods to enable function chaining as below:
    basketballGame.basket().freeThrow().freeThrow().basket().threePointer().basket().threePointer().finalScore();

const foulCount={
    foul:0,
    foulCall() {
    this.foul++;
    return this;
    },
    halfTime(){
    console.log('The number of fouls is '+this.foul);
    },
    finalFouls(){
    console.log('Final number of fouls is '+this.foul);
    }
    }
        
    foulCount.foulCall().foulCall().foulCall().foulCall().halfTime().foulCall().foulCall().foulCall().finalFouls();

// Module 3_Lab 1 Question 8

const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
    }
    
    const houston = {
        name: 'Houston',
        population: 2_326_000,
        state: 'TX',
        founded: '1929',
        timezone: 'America/Houston'
        }
    for (let key in sydney) {
        console.log(`${key}: ${sydney[key]}`);
    }
    
    for (let key in houston) {
        console.log(`${key}: ${houston[key]}`);
    }
    function get(key) {
        return [key];
    }

// Module 3_Lab 1 Question 9
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

console.log(teamSports);
console.log(dog1);
console.log(cat1);

let moreSports = teamSports
teamSports.push('Soccer','Rugby'),
teamSports.unshift('Surfing','Quidditch')
console.log(moreSports);

let dog2=dog1.replace('Bingo','Fido');
console.log(dog2);

let cat2=cat1.name.replace('Fluffy','Misty');
console.log(cat2);

// the original variable values are the because all of the changes were made in the new variables. Essentially, the new variables are using the old variables as a base to re-assign the new information.


// Module 3_Lab 1 Question 10

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.canDrive=()=>{
            return Boolean(age >= 16);
        };
        this.driver= this.canDrive();
        }
        
        const person= new Person('Cherakye', 30);
        const person2= new Person('Nelson', 28)
        console.log(person, person2);
        
        class PersonClass{
            constructor(name,age){
                this.name=name,
                this.age=age,
                this.human=true,
                this.driver=this.canDrive(this.age);
            }
            canDrive(){
                return Boolean(this.age >= 16);
            }
        }
        
        const person3= new PersonClass('Javier', 62)
        console.log(person3)