import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({
  element: Component,
  eventKey,
  onClick,
  children,
  ...otherProps
}) => {
  return <Component {...otherProps}>{children}</Component>;
};
Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
Toggle.defaultProps = {
  element: 'div',
  eventKey: '',
  onClick: () => {},
};
