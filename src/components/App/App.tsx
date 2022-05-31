import styled from "styled-components";
import FAQ from "../FAQ";
import useWindowSize from "../../hooks/useWindowSize";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    var(--soft-violet) 0%,
    var(--soft-blue) 100%
  );
`;

function App() {
  const size: Size = useWindowSize();
  return (
    <Wrapper data-testid="app">
      <FAQ size={size} />
    </Wrapper>
  );
}

export default App;
