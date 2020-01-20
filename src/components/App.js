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
      <Display result={state.total || state.next || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
