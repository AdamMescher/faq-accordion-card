import styled from 'styled-components';

const StyledIllustration = styled.div`
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .illustration-container {
    margin-top: -107px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .woman-container {
    margin-left: -27px;
    z-index: ${({ theme }) => theme.zIndex.z100};
  }
  .shadow-container {
    margin-top: -90px;
  }
`;

export default StyledIllustration;
