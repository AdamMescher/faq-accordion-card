import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
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
