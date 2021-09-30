import styled from "styled-components";

export const Category = styled.div`
  font-family: Gill Sans, sans-serif;
  font-weight: bold;
  width: 15%;
  height: 30px;
  text-align: center;
  padding-top: 12px;
  margin: 7px;
  border: 1px inset rgba(0, 0, 0, 0);
  border-radius: 13px; // 0px 7px 0px;
  :hover {
    background-color: #402ad5;
    color: white;
  }
  cursor: pointer;
  background-color: white;
`;
