import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, color, wide } = props;

  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };

  return (
    <button type="button" style={style}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
