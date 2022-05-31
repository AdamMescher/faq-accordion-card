import * as React from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/icon-arrow-down.svg";

interface Props {
  details: string;
  summary: string;
}

const Details = styled.details`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  @media (min-width: 768px) {
    background: blue;
  }
`;
const Summary = styled.summary`
  font-size: 16px;
  color: var(--very-dark-desaturated-blue);
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  & > img {
    margin-left: auto;
  }
  transition: 200ms ease-in-out;
  &:hover {
    transition: 200ms ease-in-out;
    color: var(--soft-red);
  }
  &{Details}[open] & {
    font-weight: var(--fw-bold);
  }
  @media (max-width: 500px) {
    font-size: 12px;
    white-space: break-spaces;
  }
`;
const DetailsWrapper = styled.div``;
const DetailsCopy = styled.p`
  color: var(--dark-grayish-blue);
  margin-top: 12px;
  width: 32ch;
  line-height: 1.4;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const Accordion = ({ details, summary }: Props) => {
  return (
    <Details>
      <Summary>
        {summary}
        <img src={ArrowIcon} alt="" height={"10px"} />
      </Summary>
      <DetailsWrapper>
        <DetailsCopy>{details}</DetailsCopy>
      </DetailsWrapper>
    </Details>
  );
};

export default Accordion;
