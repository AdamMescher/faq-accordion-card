import styled from 'styled-components';

const StyledApp = styled.main`
  height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gradient.softViolet} 0%,
    ${({ theme }) => theme.colors.gradient.softBlue} 100%
  );
`;

export default StyledApp;
