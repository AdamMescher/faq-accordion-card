import React, { useMemo, useState, useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';

import Collapse from './Collapse';
import Toggle from './Toggle';

const useEventKey = (eventKey, onToggle) => {
  const [activeEventKey, setActiveEventKey] = useState(eventKey);

  useLayoutEffect(() => {
    setActiveEventKey(eventKey);
  }, [eventKey, onToggle]);

  return [activeEventKey, setActiveEventKey];
};

const Accordion = ({
  element: Component,
  activeEventKey,
  onToggle,
  children,
  ...otherProps
}) => {
  const [eventKey, setEventKey] = useEventKey(activeEventKey, onToggle);

  const handleToggle = useCallback(
    (eventKey) => {
      if (activeEventKey !== undefined) {
        onToggle(eventKey);
        return;
      }
      setEventKey(eventKey);
    },
    [activeEventKey, onToggle, setEventKey]
  );

  const context = useMemo(() => {
    return {
      activeEventKey: eventKey,
      onToggle: handleToggle,
    };
  }, [eventKey, handleToggle]);

  return (
    <AccordionContext.Provider value={context}>
      <Component {...otherProps}>{children}</Component>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  // Element or Component to be rendered as the parent for accordion.
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  // `eventKey` of the accordion/section which is active/open
  activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  // onToggle callback.
  onToggle: PropTypes.func,
};

Accordion.defaultProps = {
  // default render as div
  element: 'div',

  onToggle: () => {},
};

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

export default Accordion;
