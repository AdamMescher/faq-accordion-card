import React from 'react';
import PropTypes from 'prop-types';
import useAccordionContext from '../hooks/useAccordionContext';

const Collapse = ({
  element: Component,
  eventKey,
  children,
  ...otherProps
}) => {
  const { activeEventKey } = useAccordionContext();
  return activeEventKey === eventKey ? (
    <Component {...otherProps}>{children}</Component>
  ) : null;
};

Collapse.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Collapse.defaultProps = {
  element: 'div',
  children: 'div',
  eventKey: 0,
};

export default Collapse;
