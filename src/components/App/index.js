import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../../utils/theme';
import FaqAccordianCard from '../FaqAccordianCard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <FaqAccordianCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
