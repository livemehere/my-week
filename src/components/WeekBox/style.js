import styled from "styled-components";

export const WeekBoxWrap = styled.div`
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  margin: 2rem auto;
  padding: 2em 1em;
  width: 80%;

  & > h1 {
    text-align: center;
    margin-bottom: 0.5em;
  }
`;

export const RateBoxWrap = styled.div`
  margin-top: 1em;
  text-align: center;

  & button {
    padding: 1em 3em;
    border-radius: 15px;
    border: none;
    background-color: #eeeeee;
    cursor: pointer;
    font-weight: bold;
  }

  & button:hover {
    background-color: #53a8b6;
  }
`;

export const AvgTitle = styled.h1`
  color: #5585b5;
`;
