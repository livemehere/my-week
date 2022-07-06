import styled from "styled-components";

export const DetailWrap = styled.div`
  text-align: center;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  margin: 2rem auto;
  padding: 2em 1em;
  max-width: 80%;

  & > div {
    margin: 1em 0;
  }

  & button {
    padding: 1em 3em;
    border-radius: 15px;
    border: none;
    background-color: #f76b8a;
    cursor: pointer;
    font-weight: bold;
  }

  & button:hover {
    background-color: #f72b8f;
  }
`;

export const HightLight = styled.span`
  background-color: #ffc46d;
  padding: 0.1em 0.2em 0 0.2em;
  color: white;
`;
