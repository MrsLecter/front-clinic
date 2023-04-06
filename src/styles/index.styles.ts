import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 7px 12px 7px 12px;
  display: flex;

  & > div:first-child {
    flex: 54%;
    float: left;
  }

  & > div:last-child {
    flex: 45%;
    text-align: right;
    padding-right: 30px;
    float: right;
  }

  @media (max-width: 920px) {
    height: 150px;
    flex-direction: column;

    & > div:last-child {
      order: -1;
    }
  }
`;

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
