import React from 'react';
import './BaseInput.scss';

const BaseInput = (
  {
    id,
    type,
    value,
    placeholder,
    ...props
  }
) => {
  return (
    <label htmlFor={id} className="base-field">
      <input {...props} type={type} placeholder={placeholder} value={value} />
    </label>
  );
};

export default BaseInput;
