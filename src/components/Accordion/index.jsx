import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import StyledAccordion from './styled';
import AccordionContext from './context';
import Collapse from './Collapse';
import Toggle from './Toggle';

const Accordion = ({
  element: Component,
  activeEventKey,
  onToggle,
  children,
  ...otherProps
}) => {
  const context = useMemo(
    () => ({
      activeEventKey,
      onToggle,
    }),
    [activeEventKey, onToggle]
  );
  return (
    <AccordionContext.Provider value={context}>
      <StyledAccordion>
        <Component {...otherProps}>{children}</Component>
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onToggle: PropTypes.func,
};

Accordion.defaultProps = {
  element: 'div',
  children: 'div',
  onToggle: () => {},
  activeEventKey: 1,
};

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

export default Accordion;
