import styled from 'styled-components';

const StyledAccordianTab = styled.li`
  padding: 1rem 0 1rem 0;
  display: grid;
  grid-template-columns: 1fr 20px;
  grid-template-rows: 20px 1fr;
  border-bottom: ${({ theme }) => theme.borders.width.b1} solid
    ${({ theme }) => theme.colors.neutral.lightGrayishBlue};
  .title {
    color: ${({ theme }) => theme.colors.primary.darkDesaturatedBlue};
    font-weight: ${({ theme }) => theme.typography.weights.regular};
  }
  .title:hover {
    color: ${({ theme }) => theme.colors.primary.softRed};
  }
  img {
    align-self: center;
  }
  .content {
    display: none;
    padding-top: 0.75rem;
    color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  }
  :hover {
    cursor: pointer;
    .title {
      color: ${({ theme }) => theme.colors.primary.softRed};
    }
  }
`;

export default StyledAccordianTab;
