import styled from "styled-components";

export const StyledResultsItem = styled.div<{ isActive: boolean }>`
  width: 100%;
  min-height: 25%;
  padding: 16px;
  background-color: ${(props) => (props.isActive ? "#12b886" : "#e7e6e6")};
  border-bottom: 1px solid black;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  overflow-x: auto;
  cursor: pointer;

  div {
    margin: 1% 0px;
  }

  div:first-child {
    font-size: 20px;
    font-weight: 500;
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &:hover {
    background-color: #b0b0b0;
    border-right: 3px solid black;
    border-left: 3px solid black;
  }

  a:hover {
    text-decoration: underline;
  }
`;
