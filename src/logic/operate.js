import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber);
    case '-':
      return firstNumber.minus(secondNumber);
    case 'X':
      return firstNumber.times(secondNumber);
    case '÷':
      if (secondNumber === '0') {
        return '0';
      }
      return firstNumber.div(secondNumber);
    default:
      break;
  }
  return '0';
};

export default Operate;
