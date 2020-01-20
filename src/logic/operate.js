import Big from 'big';

const Operate = (numberOne, numberTwo, operation) => {
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '+':
      return firstNumber.plus(secondNumber).toString();
    case '-':
      return firstNumber.minus(secondNumber).toString();
    case 'X':
      return firstNumber.times(secondNumber).toString();
    case '÷':
      if (secondNumber === '0') {
        return '0';
      }
      return firstNumber.div(secondNumber).toString();
    default:
      break;
  }
  return '0';
};

export default Operate;
