import React from 'react';
import PropTypes from 'prop-types';

const Collapse = ({
  element: Component,
  eventKey,
  children,
  ...otherProps
}) => {
  return <Component {...otherProps}>{children}</Component>;
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Collapse.defaultProps = {
  element: 'div',
  eventKey: '',
};
