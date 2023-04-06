import styled from "styled-components";

export const StyledTabs = styled.div`
  width: 100%;
  margin-left: 30px;
  height: 77vh;

  @media (max-width: 920px) {
    height: 580px;
    max-height: 580px;
    margin: 50px 0px 10px 0px;
    margin-top: 50px;
    margin-left: 0px;
  }
`;

export const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  button:first-child {
    margin-right: -1px;
  }
`;

export const StyledButton = styled.button<{ isActive: boolean }>`
  flex: 50%;
  height: 35px;
  font-size: 22px;
  font-weight: 600;
  border: ${(props) => (props.isActive ? "2px" : "1px")} solid black;
  background-color: ${(props) => (props.isActive ? "#12b886" : "#868f96")};
`;

export const StyledContent = styled.div<{
  isActiveTab: boolean;
  isMap: boolean;
}>`
  display: ${(props) => (props.isActiveTab ? "block" : "none")};
  width: 100%;
  height: calc(100% - 35px);
  padding: ${(props) => (props.isMap ? "0px" : "16px")};
  border: 1px solid black;
  border-top: none;
  overflow: auto;

  h2 {
    font-size: 18px;
    text-align: center;
  }

  div:first-child {
    font-size: 26px;
    font-weight: 500;
  }

  div:nth-child(2) {
    margin: 5px 0px;
    display: flex;
    justify-content: space-between;
  }

  div:nth-child(3) {
    margin: 5px 0px;
  }

  div:last-child {
    margin-top: 16px;
    overflow: ellipsis;
  }
`;
