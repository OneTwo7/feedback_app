import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  let className = 'form-control';
  className += touched && error ? ' invalid' : '';

  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <input id={input.name} className={className} {...input} />
      {touched && <div className="error">{error}</div>}
    </div>
  );
};
