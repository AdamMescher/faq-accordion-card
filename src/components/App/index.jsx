import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../../utils/theme';
import StyledApp from './styled';
import FaqAccordianCard from '../FaqAccordianCard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <FaqAccordianCard />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
