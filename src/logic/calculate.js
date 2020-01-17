import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  const operationSymbols = ['+', '-', '%', '÷', 'X'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (dataObject.next && buttonName === '+/-') {
    return {
      next: (parseFloat(dataObject.next) * -1).toString(),
    };
  }

  if (dataObject.total && buttonName === '+/-') {
    return {
      total: (parseFloat(dataObject.total) * -1).toString(),
    };
  }

  if (buttonName === '%') {
    if (dataObject.next) {
      return {
        next: dataObject.next.div('100').toString(),
      };
    }
    if (dataObject.next && dataObject.operation) {
      const answer = Operate(dataObject.total, dataObject.next, dataObject.operation);
      return {
        total: answer.div('100').toString(),
        next: null,
        operation: null,
      };
    }
  }

  if (buttonName === '=' && dataObject.total && dataObject.next && dataObject.operation) {
    return {
      total: Operate(dataObject.total, dataObject.next, dataObject.operation),
      next: null,
      operation: null,
    };
  }

  if (operationSymbols && dataObject.total && dataObject.next && dataObject.operation) {
    return {
      total: null,
      next: Operate(dataObject.total, dataObject.next, dataObject.operation),
      operation: null,
    };
  }

  if (buttonName === '.') {
    if (dataObject.next) {
      if (dataObject.next.includes('.')) {
        return {};
      }
      return {
        next: `${dataObject.next}.`,
      };
    }
    return {
      next: '0.',
    };
  }

  if (buttonName === '=' && dataObject.next === '0' && dataObject.operation === '÷') {
    return {
      error: 'Error: You cannot divide by 0',
    };
  }

  return {
    total: dataObject.total,
    next: dataObject.next,
    operation: dataObject.operation,
  };
};

export default Calculate;
