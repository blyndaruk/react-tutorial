import React from 'react';
import './BaseInput.scss';

const BaseInput = React.forwardRef((
  {
    id,
    type,
    value,
    placeholder,
    ...props
  },
  ref
) => {
  return (
    <label htmlFor={id} className="base-field">
      <input {...props} type={type} placeholder={placeholder} value={value} ref={ref} />
    </label>
  );
});

export default BaseInput;
