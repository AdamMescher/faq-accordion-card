import React from 'react';
import StyledChevron from './styled';

const Chevron = ({ src, direction }) => (
  <StyledChevron>
    <img src={src} alt="chevron" direction={direction} />
  </StyledChevron>
);

export default Chevron;
