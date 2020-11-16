import React from 'react';
import PropTypes from 'prop-types';
import StyledCardHeader from './styled';

const CardHeader = ({ children, ...props }) => (
  <StyledCardHeader {...props}>{children}</StyledCardHeader>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
