import React from 'react';
import PropTypes from 'prop-types';
import StyledCardBody from './styled';

const CardBody = ({ children, ...props }) => (
  <StyledCardBody {...props}>{children}</StyledCardBody>
);

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardBody;
