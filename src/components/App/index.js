import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../../utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
