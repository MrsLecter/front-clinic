import styled from "styled-components";

export const StyledResults = styled.div`
  width: 100%;
  height: 77vh;
  border: 1px solid black;
  overflow-y: auto;

  h2 {
    font-size: 18px;
    text-align: center;
  }

  @media (max-width: 920px) {
    height: 580px;
    max-height: 580px;
  }
`;
