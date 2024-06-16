const Logger = require('./logger');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package for generating random IDs

class Calculator {
    constructor() {
        this.id = uuidv4(); // Assign a random ID to each instance
    }

    add(num1, num2) {
        const result = num1 + num2;
        Logger.log(`ID: ${this.id} | Operation: add | num1: ${num1}, num2: ${num2} | Result: ${result}`);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        Logger.log(`ID: ${this.id} | Operation: subtract | num1: ${num1}, num2: ${num2} | Result: ${result}`);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        Logger.log(`ID: ${this.id} | Operation: multiply | num1: ${num1}, num2: ${num2} | Result: ${result}`);
        return result;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            Logger.log(`ID: ${this.id} | Operation: divide | num1: ${num1}, num2: ${num2} | Error: Division by zero`);
            throw new Error('Division by zero is not allowed.');
        }
        const result = num1 / num2;
        Logger.log(`ID: ${this.id} | Operation: divide | num1: ${num1}, num2: ${num2} | Result: ${result}`);
        return result;
    }
}

module.exports = Calculator;
