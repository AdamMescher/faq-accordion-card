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
`;

export default StyledApp;
