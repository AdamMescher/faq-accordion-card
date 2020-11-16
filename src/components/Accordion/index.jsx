import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';
import Toggle from './Toggle';

const Accordion = ({
  element: Component,
  activeEventKey,
  onToggle,
  children,
  ...otherProps
}) => <Component {...otherProps}>{children}</Component>;

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onToggle: PropTypes.func,
};

Accordion.defaultProps = {
  activeEventKey: '',
  element: 'div',
  onToggle: () => {},
};

export default Accordion;
