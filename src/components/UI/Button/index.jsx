import React from 'react';
import './BaseButton.scss';

const BaseButton = ({ children, ...props }) => {
  return (
    <button {...props} className="base-button">
      {children}
    </button>
  );
};

export default BaseButton;
