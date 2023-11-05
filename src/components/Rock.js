import React from 'react';
import PropTypes from 'prop-types';

const Rock = ({ size, position }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    background: 'gray'
  };

  return <div style={style} />;
};

Rock.propTypes = {
  size: PropTypes.number.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired
};

export default Rock;