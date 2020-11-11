import React from 'react';
import CardHeader from './Header';
import CardBody from './Body';

const Card = ({ children, className }) => (
  <div className={className}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
