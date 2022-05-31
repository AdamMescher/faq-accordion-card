import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --very-dark-desaturated-blue: ${theme.color.primary.veryDarkDesaturatedBlue};
    --soft-red: ${theme.color.primary.softRed};
    --soft-violet: ${theme.color.primary.softViolet};
    --soft-blue: ${theme.color.primary.softBlue};
    --very-dark-grayish-blue: ${theme.color.neutral.veryDarkGrayishBlue};
    --dark-grayish-blue: ${theme.color.neutral.darkGrayishBlue};
    --light-grayish-blue: ${theme.color.neutral.lightGrayishBlue};
    --off-white: ${theme.color.neutral.offWhite};
    --fs-body: ${theme.typography.body.fontSize};
    --ff-kumbh-sans: ${theme.typography.font.family.kumbhSans};
    --fw-regular: ${theme.typography.font.weight.regular};
    --fw-bold: ${theme.typography.font.weight.bold};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--ff-kumbh-sans);
    font-size: var(--fs-body);
  }
`;

export default GlobalStyle;
