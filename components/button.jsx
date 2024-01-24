// components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: color || '#3498db',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
