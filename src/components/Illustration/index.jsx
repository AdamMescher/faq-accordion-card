import React from 'react';
import StyledIllustration from './styled';
import womanOnlineMobile from '../../assets/images/illustration-woman-online-mobile.svg';
import bgPatternMobile from '../../assets/images/bg-pattern-mobile.svg';

const Illustration = () => (
  <StyledIllustration>
    <div className="illustration-container">
      <div className="woman-container">
        <img src={womanOnlineMobile} alt="" />
      </div>
      <div className="shadow-container">
        <img src={bgPatternMobile} alt="" />
      </div>
    </div>
  </StyledIllustration>
);

export default Illustration;
