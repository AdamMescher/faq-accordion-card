import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './styled';
import CardHeader from './Header';
import CardBody from './Body';

const Card = ({ children, className }) => (
  <StyledCard className={className}>{children}</StyledCard>
);

Card.Header = CardHeader;
Card.Body = CardBody;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

Card.defaultProps = {
  children: 'div',
  className: '',
};

export default Card;
