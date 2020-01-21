import Operate from './operate';

const Calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;
  const operationSymbols = {
    AC: 'AC',
    '+': '+',
    '-': '-',
    X: 'X',
    '%': '%',
    '+/-': '+/-',
    '.': '.',
    '÷': '÷',
    '=': '=',
  };
  const operator = operationSymbols[buttonName];

  if (operator) {
    if (operator === 'AC') {
      return {
        total: null,
        next: null,
        operation: null,
      };
    }
    if (operator === '=') {
      if (!next || !operation) {
        return {};
      }
      if (next === '0' || total === '0') {
        return {};
      }
      return {
        total: Operate(total, next, operation),
        next: null,
        operation: null,
      };
    }
    if (operator === '%') {
      if (operation && next) {
        const result = Operate(total, next, operation);
        return {
          total: (result / 100).toString(),
          next: null,
          operation: null,
        };
      }
      if (next) {
        return {
          ...dataObject,
          next: (next / 100).toString(),
        };
      }
    }
    if (operator === '+/-') {
      if (next) {
        return {
          ...dataObject,
          next: Operate(-1, next, 'X'),
        };
      }
      if (total) {
        return {
          ...dataObject,
          total: Operate(-1, total, 'X'),
        };
      }
      return {};
    }
    if (operator === '.') {
      if (next && next.includes(operator)) {
        return {};
      }
      if (next) {
        return {
          ...dataObject,
          next: next + operator,
        };
      }
      if (total && total.includes(operator)) {
        return {};
      }
      if (total) {
        return {
          ...dataObject,
          total: total + operator,
        };
      }
      if (operation) {
        return {
          ...dataObject,
          next: next + operator,
        };
      }
      return {
        ...dataObject,
        total: `0${operator}`,
      };
    }
    if (operation) {
      if (!next) {
        return {
          ...dataObject,
          operation: operator,
        };
      }
      return {
        total: Operate(total, next, operation),
        next: null,
        operation: operator,
      };
    }
    if (!next) {
      return {
        ...dataObject,
        operation: operator,
      };
    }
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }
  if (!next) {
    return {
      ...dataObject,
      next: buttonName,
    };
  }
  if (next) {
    return {
      ...dataObject,
      next: next + buttonName,
    };
  }

  throw Error('Error...');
};

export default Calculate;
