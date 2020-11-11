import React from 'react';
import StyledFaqAccordianCard from './styled';
import AccordianTabList from '../AccordianTabList';
import copy from '../../utils/copy';

const FaqAccordianCard = () => (
  <StyledFaqAccordianCard>
    <AccordianTabList tabs={copy} />
  </StyledFaqAccordianCard>
);

export default FaqAccordianCard;
