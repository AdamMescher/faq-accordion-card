import styled from 'styled-components';

const StyledFaqAccordianTab = styled.section`
  height: 100vh;
  margin-top: 20vh;
  margin-bottom: 10vh;
  width: 90%;
  margin-left: 5%;
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borders.rounded.lg};
  h2 {
    margin-top: 1rem;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.sizes.xl4};
    color: ${({ theme }) => theme.colors.primary.darkDesaturatedBlue};
  }
`;

export default StyledFaqAccordianTab;
