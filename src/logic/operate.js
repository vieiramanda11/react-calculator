const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = firstNumber.plus(secondNumber);
      break;
    case '-':
      result = firstNumber.minus(secondNumber);
      break;
    case 'X':
      result = firstNumber.times(secondNumber);
      break;
    case '÷':
      if (secondNumber === '0') {
        result = '0';
      }
      result = firstNumber.div(secondNumber);
      break;
    default:
      break;
  }
  return result.toString();
};

export default Operate;
