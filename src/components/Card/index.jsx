import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styled';
import CardHeader from './Header';
import CardBody from './Body';

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.Header = CardHeader;
Card.Body = CardBody;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
