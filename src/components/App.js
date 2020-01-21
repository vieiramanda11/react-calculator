import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(Calculate(state, buttonName));
  };

  return (
    <div className="app">
      <Display result={state.next || state.total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
