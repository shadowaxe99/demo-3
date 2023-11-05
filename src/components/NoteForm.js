import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} required />
      <button type='submit'>Leave a note</button>
    </form>
  );
};

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NoteForm;