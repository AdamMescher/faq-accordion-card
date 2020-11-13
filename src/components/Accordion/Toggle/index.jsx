import React from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from '../hooks';

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordionContext();
  return (event) => {
    onToggle(eventKey === activeEventKey ? null : eventKey);

    if (onClick) {
      onClick(event);
    }
  };
};

const Toggle = ({
  element: Component,
  eventKey,
  onClick,
  children,
  ...otherProps
}) => {
  const accordionClick = useAccordionClick(eventKey, onClick);

  return (
    <Component onClick={accordionClick} {...otherProps}>
      {children}
    </Component>
  );
};

Toggle.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggle.defaultProps = {
  element: 'div',
};

export default Toggle;
