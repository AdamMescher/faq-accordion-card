import React from 'react';
import StyledFaqAccordianCard from './styled';
import Illustration from '../Illustration';
import AccordianTabList from '../AccordianTabList';
import copy from '../../utils/copy';

const FaqAccordianCard = () => (
  <StyledFaqAccordianCard>
    <Illustration />
    <h2>FAQ</h2>
    <AccordianTabList tabs={copy} />
  </StyledFaqAccordianCard>
);

export default FaqAccordianCard;
