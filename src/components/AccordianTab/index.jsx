import React from 'react';
import StyledAccordianTab from './styled';

const AccordianTab = ({ title, content }) => (
  <StyledAccordianTab>
    <p>{title}</p>
    <p>{content}</p>
  </StyledAccordianTab>
);

export default AccordianTab;
