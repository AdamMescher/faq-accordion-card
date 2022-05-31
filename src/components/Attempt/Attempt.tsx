import * as React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icon-arrow-down.svg";

interface Props {
  id: string;
  heading: string;
  content: string;
  expanded: boolean;
  setExpanded: (string: boolean) => void;
}

const Wrapper = styled.div`
  flex: 0 1;
  width: 100%;
  border-bottom: 1px solid var(--light-grayish-blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 8px;
`;
const Heading = styled.h4`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
`;
const AccordionButton = styled.button<{ expanded: boolean }>`
  font-size: 14px;
  color: var(--very-dark-desaturated-blue);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  font-weight: ${(props) =>
    props.expanded ? "var(--fw-bold)" : "var(--fw-regular)"};
  & > img {
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    transition: all 200ms ease-in-out;
  }
  &:hover {
    transition: 200ms ease-in-out;
    color: var(--soft-red);
  }
`;
const Content = styled.div<{ expanded: boolean }>`
  margin-top: ${({ expanded }) => (expanded ? "12px" : "0px")};
  max-height: ${({ expanded }) => (expanded ? "200px" : "0px")};
  transition: all 200ms ease-in-out;
  overflow: hidden;
  width: 40ch;
  padding-bottom: ${({ expanded }) => (expanded ? "12px" : "0px")};
`;
const ContentCopy = styled.p`
  font-size: 12px;
  color: var(--dark-grayish-blue);
  line-height: 1.4;
`;

const Attempt = ({ id, heading, content, expanded, setExpanded }: Props) => {
  const handleClick = () => (expanded ? setExpanded(false) : setExpanded(id));

  return (
    <Wrapper>
      <Heading aria-expanded={expanded} aria-controls={id}>
        <AccordionButton expanded={expanded} onClick={handleClick}>
          {heading}
          <img src={ArrowIcon} alt={""} />
        </AccordionButton>
      </Heading>
      <Content expanded={expanded}>
        <ContentCopy>{content}</ContentCopy>
      </Content>
    </Wrapper>
  );
};

export default Attempt;
