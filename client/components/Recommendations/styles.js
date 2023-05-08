import styled from "styled-components";
import { fonts, fs } from "../../utils";
export const Container = styled.div`
  width: 100%;
  padding: 5vh 0 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  font-size: ${fs.large};
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.pink};
  margin-top: 3vh;
`;

export const Desc = styled.p`
  font-size: ${fs.medium};
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  margin-top: 3vh;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
  /* background-color: green; */
  justify-content: space-between;
  column-gap: 2vw;
  width: fit-content;
  svg {
    height: 30px;
    width: 5vh;
  }
`;

export const LinkItem = styled.a`
  cursor: pointer;
  transition: 1s;
  svg {
    fill: ${(props) => props.theme.blue};
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer = styled.p`
  font-size: ${fs.small};
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.blue};
  margin-top: 4vh;
  text-align: center;
`;
