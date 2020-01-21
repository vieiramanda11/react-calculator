import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = ({ state, setState }) => {
  [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(Calculate(state, buttonName));
  };

  return (
    <div className="app">
      <Display result={state.next || state.total || 0} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

App.propTypes = {
  state: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
};

export default App;
