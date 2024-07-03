// src/Calculator.jsx

import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumChange = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number1 / number2;
        break;
      default:
        calculatedResult = 'Invalid Operator';
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>

      <div>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={handleNumChange}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={handleNumChange}
          placeholder="Enter number 2"
        />
      </div>

      <div>
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">Select Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>

      <button onClick={calculateResult}>Calculate</button>

      <div className="result">
        {result !== '' && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default Calculator;
