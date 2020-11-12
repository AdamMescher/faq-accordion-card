import React from 'react';
import PropTypes from 'prop-types';
import StyledCardHeader from './styled';

const CardHeader = ({ children, className, ...props }) => (
  <StyledCardHeader className={className} {...props}>
    {children}
  </StyledCardHeader>
);

CardHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  children: 'div',
  className: '',
};

export default CardHeader;
