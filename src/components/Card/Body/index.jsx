import React from 'react';
import PropTypes from 'prop-types';
import StyledCardBody from './styled';

const CardBody = ({ children, className, ...props }) => (
  <StyledCardBody className={className} {...props}>
    {children}
  </StyledCardBody>
);

CardBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

CardBody.defaultProps = {
  children: 'div',
  className: '',
};

export default CardBody;
