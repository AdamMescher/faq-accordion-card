import React from 'react';

const CardBody = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export default CardBody;
