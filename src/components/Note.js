import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ text }) => {
  return <p>{text}</p>;
};

Note.propTypes = {
  text: PropTypes.string.isRequired
};

export default Note;