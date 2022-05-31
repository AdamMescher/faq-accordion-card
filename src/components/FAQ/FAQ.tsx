import * as React from "react";
import styled from "styled-components";
import Illustration from "../Illustration";
import Attempt from "../Attempt";
import illustrationBox from "../../assets/illustration-box-desktop.svg";

import items from "./items";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

interface Props {
  size: Size;
}

const Wrapper = styled.article`
  .illustration-box {
    position: absolute;
    top: 45%;
    left: -10%;
  }
  margin-top: 25%;
  position: relative;
  border-radius: 16px;
  background: white;
  margin-left: 22px;
  margin-right: 22px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 750px) {
    margin-left: 5%;
    margin-top: 0;
    height: 500px;
    max-width: 925px;
    flex-direction: row;
    padding: 40px;
  }
`;
const CardBody = styled.div`
  position: relative;
  @media (min-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
  }
`;
const Title = styled.h1`
  margin-top: 62px;
  padding-left: 24px;
  color: var(--very-dark-desaturated-blue);
  text-align: center;
  font-size: 32px;
  @media (min-width: 750px) {
    align-self: flex-start;
    margin-top: 0;
  }
`;
const AccordionList = styled.div`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  @media (min-width: 750px) {
    margin-top: 64px;
    padding-bottom: 0;
  }
`;

const FAQ = ({ size }: Props) => {
  const [expanded, setExpanded] = React.useState<any>(null);
  const assetsToDisplay = () =>
    size && typeof size.width === "string" && size.width > 750
      ? "desktop"
      : "mobile";
  return (
    <Wrapper>
      <Illustration assets={assetsToDisplay()} />
      {assetsToDisplay() === "desktop" ? (
        <img className="illustration-box" src={illustrationBox} alt={""} />
      ) : null}
      <CardBody>
        <Title>FAQ</Title>
        <AccordionList>
          {items.map(({ id, heading, content }, index) => (
            <Attempt
              key={id}
              id={id}
              heading={heading}
              content={content}
              expanded={id === expanded}
              setExpanded={setExpanded}
            />
          ))}
        </AccordionList>
      </CardBody>
    </Wrapper>
  );
};

export default FAQ;
