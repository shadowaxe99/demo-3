import React from 'react';
import PropTypes from 'prop-types';

const Plant = ({ type, position }) => {
  const style = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    // Add more styles based on the type of the plant
  };

  return <div style={style}>{type}</div>;
};

Plant.propTypes = {
  type: PropTypes.string.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired
};

export default Plant;