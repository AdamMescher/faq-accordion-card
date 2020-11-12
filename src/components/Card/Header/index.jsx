import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
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
