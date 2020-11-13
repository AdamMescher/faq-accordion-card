import { createGlobalStyle } from 'styled-components';
import '../../utils/reset.css';
import theme from '../../utils/theme';
import 'fontsource-kumbh-sans/400.css';
import 'fontsource-kumbh-sans/700.css';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.sizes.base};
    }
`;

export default GlobalStyle;
