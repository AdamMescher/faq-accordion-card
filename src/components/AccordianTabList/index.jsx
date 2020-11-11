import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import StyledAccordianTabList from './styled';
import AccordianTab from '../AccordianTab';

const AccordianTabList = ({ tabs }) => (
  <StyledAccordianTabList>
    {tabs.map((tab) => (
      <AccordianTab key={uuidv4()} title={tab.title} content={tab.content} />
    ))}
  </StyledAccordianTabList>
);

export default AccordianTabList;

AccordianTabList.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
