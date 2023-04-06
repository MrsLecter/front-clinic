import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  form {
    width: inherit;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  button {
    padding: 0px;
    margin-right: 5px;
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
  }

  input {
    width: 100%;
    height: 32px;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: 400;
    border: 1px solid black;
  }
`;

export const StyledCheckboxContainer = styled.div`
  width: 100%;
  height: 27px;
  margin-top: 18px;
  padding-left: 37px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;

  label {
    height: 19px;
    min-width: 65px;
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    overflow: ellipsis;
  }

  label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: lightgrey;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  label input:checked ~ span:after {
    display: block;
  }

  label span:after {
    content: "\u2717";
    left: -4px;
    top: -4px;
    width: 18px;
    height: 18px;
    font-size: 28px;
    font-weight: 300;
  }
`;
