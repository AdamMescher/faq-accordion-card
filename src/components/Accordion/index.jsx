import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import StyledAccordion from './styled';
import Collapse from './Collapse';
import Toggle from './Toggle';
import AccordionContext from './AccordionContext';

const Accordion = ({
  element: Component,
  activeEventKey,
  onToggle,
  children,
  ...otherProps
}) => {
  const context = useMemo(() => {
    return {
      activeEventKey,
      onToggle,
    };
  }, [activeEventKey, onToggle]);
  return (
    <AccordionContext.Provider value={context}>
      <StyledAccordion>
        <Component {...otherProps}>{children}</Component>
      </StyledAccordion>
    </AccordionContext.Provider>
  );
};

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
