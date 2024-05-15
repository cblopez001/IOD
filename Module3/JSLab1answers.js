// Module 3_Lab 1 Question 1 ---answers are on READ ME file ---

"" + 1 + 0
"" - 1 + 0
true + false
!true
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
" -9 " + 5
" -9 " - 5
null + 1
undefined + 1
undefined == null
undefined === null
" \t \n" - 2

// Module 3_Lab 1 Question 2 ---answers are on READ ME file ---

// Module 3_Lab 1 Question 3 ---answers are on READ ME file ---

// Module 3_Lab 1 Question 4

// Module 3_Lab 1 Question 5

// Module 3_Lab 1 Question 6

// Module 3_Lab 1 Question 7

const basketballGame = {
    score: 0,
    freeThrow() {
    this.score++;
    return this.score;
    },
    basket() {
    this.score += 2;
    return this.score;
    },
    threePointer() {
    this.score += 3;
    return this.score;
    },
    halfTime() {
    console.log('Halftime score is '+this.score);
    },
    finalScore(){
        console.log('Final Score is'+this.score);
    }
    }    

const foulCount={
    foul:0,
    foulCall(){
        this.foul++;
        return this.foul;
    },
    halftimeFoul(){
        console.log('Foul Count is'+ this.foul);
    },
    finalFouls(){
        console.log('Final Foul count is'+ this.foul);
    }
}

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

// Module 3_Lab 1 Question 10