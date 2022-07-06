import styled from "styled-components";

export const WeekWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5em;
  gap: 1em;
`;

export const Day = styled.div`
  font-weight: bold;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3em;
`;

export const Dot = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "#79c2d0" : "#e1f2f4")};
`;

export const GoButton = styled.button`
  border: none;
  
`;
