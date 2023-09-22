import React from 'react';
import '../Atoms/Button.css';

function Button({ value, onClick }) {
  return (
    <button onClick={onClick}>{value}</button>
  );
}

export default Button;
