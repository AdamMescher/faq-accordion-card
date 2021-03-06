import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import StyledApp from './styled';
import Head from '../Head';
import Accordion from '../Accordion';
import theme from '../../utils/theme';
import copy from '../../utils/copy';
import Card from '../Card';

function App() {
  const [activeEventKey, setActiveEventKey] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Head />
        <GlobalStyle />
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
          {copy.map(({ title, content }, index) => (
            <Card key={index}>
              <Accordion.Toggle element={Card.Header} eventKey={index}>
                {title}
              </Accordion.Toggle>
              <Accordion.Collapse element={Card.Body} eventKey={index}>
                {content}
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
