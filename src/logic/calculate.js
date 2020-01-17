const Calculate = (dataObject, buttonName) => {
  let { total, next, object } = dataObject;
  const operations = ['+', '-', '%', '÷', 'X'];

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  return { total, next, object };
};

export default Calculate;
