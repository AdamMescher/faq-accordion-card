import React from 'react';
import PropTypes from 'prop-types';
import StyledAccordianTab from './styled';

const AccordianTab = ({ title, content }) => (
  <StyledAccordianTab>
    <p>{title}</p>
    <p>{content}</p>
  </StyledAccordianTab>
);

export default AccordianTab;

AccordianTab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
