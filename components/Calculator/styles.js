import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.card};
  color: white;
  align-self: center;
  border-radius: 4px;
`;
export const Result = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  font-size: large;
  width: 13rem;
  background-color: ${(props) => props.theme.card};
  border: 1px solid #525252;
  color: white;
  border-radius: 10px;
`;
export const Button = styled.button`
  font-size: large;
  padding: 1vh 1vw 1vh 1vw;
  margin: 1vh 1vw 0 1vw;
  border: 1px solid black;
  background-color: ${(props) => props.theme.blue};
  border-radius: 10px;
  color: black;
  cursor: pointer;
`;
