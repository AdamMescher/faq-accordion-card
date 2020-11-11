import React from 'react';
import StyledFaqAccordionCard from './styled';
import Illustration from '../Illustration';
import AccordionTabList from '../AccordionTabList';
import copy from '../../utils/copy';

const FaqAccordionCard = () => (
  <StyledFaqAccordionCard>
    <Illustration />
    <h2>FAQ</h2>
    <AccordionTabList tabs={copy} />
  </StyledFaqAccordionCard>
);

export default FaqAccordionCard;
