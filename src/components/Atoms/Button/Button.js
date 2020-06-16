import React from 'react';

function Button({
  children,
  color = 'default',
  type = 'button',
  onClick,
  thin,
  thick,
}) {
  const btnClasses = `
  btn
  btn-${color}
  ${thick ? 'btn-thick' : ''}
  ${thin ? 'btn-thin' : ''}
  `;
  return (
    <div>
      <button className={btnClasses} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
