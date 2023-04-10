import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 100%;
  margin-top: 10px;
  padding: 7px 12px 7px 12px;
  display: flex;

  & > div:first-child {
    flex: 58%;
    float: left;
  }

  & > div:last-child {
    flex: 45%;
    float: right;
  }

  @media (max-width: 920px) {
    flex-direction: column;

    & > div:first-child {
      height: 600px;
    }
  }
`;
