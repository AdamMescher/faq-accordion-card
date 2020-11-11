import React from 'react';
import PropTypes from 'prop-types';
import StyledAccordianTab from './styled';
import arrow from '../../assets/icons/icon-arrow-down.svg';

const AccordianTab = ({ title, content }) => (
  <StyledAccordianTab>
    <h3 className="title">{title}</h3>
    <img src={arrow} alt="" />
    <p className="content">{content}</p>
  </StyledAccordianTab>
);

export default AccordianTab;

AccordianTab.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
