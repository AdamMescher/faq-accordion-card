import styled from "styled-components";
import illustrationWomanOnlineDesktop from "../../assets/illustration-woman-online-desktop.svg";
import illustrationWomanOnlineMobile from "../../assets/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../../assets/bg-pattern-mobile.svg";
import bgPatternDesktop from "../../assets/bg-pattern-desktop.svg";

interface Props {
  assets: string;
}

const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  .illustration-woman {
    margin-top: -45%;
    width: 100%;
    display: block;
  }
  .background {
    position: absolute;
    top: -20px;
    width: 100%;
  }

  @media (min-width: 750px) {
    width: 100%;
    margin-left: -40px;
    margin-top: -40px;
    margin-bottom: -40px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .illustration-woman {
      margin-top: 0;
      margin-left: -50%;
      object-position: 50% 50%;
    }
    .background {
      height: 100%;
      margin-left: -25%;
      top: 75px;
    }
  }
`;

const Illustration = ({ assets }: Props) => {
  let srcIllustration;
  let srcBackground;
  if (assets === "mobile") {
    srcIllustration = illustrationWomanOnlineMobile;
    srcBackground = bgPatternMobile;
  }
  if (assets === "desktop") {
    srcIllustration = illustrationWomanOnlineDesktop;
    srcBackground = bgPatternDesktop;
  }
  return (
    <Wrapper>
      <img className="illustration-woman" src={srcIllustration} alt={""} />
      <img className="background" src={srcBackground} alt={""} />
    </Wrapper>
  );
};

export default Illustration;
