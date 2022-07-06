import styled from "styled-components";

export const WeekWrap = styled.div`
  display: flex;
`;

export const Day = styled.div`
  font-weight: bold;
`;

export const Dots = styled.div`
  display: flex;
`;

export const Dot = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? "yellow" : "#d2d2d2")};
`;
