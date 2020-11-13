import React from 'react';

import CardHeader from './Header';
import CardBody from './Body';

const Card = ({ children }) => <div>{children}</div>;

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
