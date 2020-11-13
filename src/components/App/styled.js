import styled from 'styled-components';

const StyledApp = styled.main`
  height: 100vh;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gradient.softViolet} 0%,
    ${({ theme }) => theme.colors.gradient.softBlue} 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  section {
    height: 60vh;
    width: 100%;
    background: white;
    border-radius: ${({ theme }) => theme.borders.rounded.xl2};
  }
  h2 {
    width: 90%;
    margin-left: 5%;
    text-align: center;
    padding-top: 1rem;
    font-size: ${({ theme }) => theme.typography.sizes.xl3};
    color: ${({ theme }) => theme.colors.primary.darkDesaturatedBlue};
  }
`;

export default StyledApp;
