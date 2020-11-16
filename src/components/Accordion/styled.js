import styled from 'styled-components';

const StyledAccordion = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borders.rounded.xl2};
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default StyledAccordion;
