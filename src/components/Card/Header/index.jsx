import React from 'react';

const CardHeader = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export default CardHeader;
