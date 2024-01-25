import styled from "styled-components";
import { fonts, fs } from "../../utils/";

export const Container = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  /* border-bottom: solid 1px ${(props) => props.theme.navbar}; */
  background-color: ${(props) => props.theme.body};
  svg {
    fill: ${(props) => props.theme.primaryFont};
    cursor: pointer;
    stroke-dashoffset: 0;
    stroke-dasharray: 700;
    stroke-width: 2;
    transition: 0.5s;
    &:hover {
      fill: ${(props) => props.theme.pink};
    }
  }
  @media screen and (min-width: 768px) {
    svg {
      display: none;
    }
  }
`;

export const LogoContainer = styled.text`
  font-size: ${fs.large};
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.blue};
  cursor: pointer;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  font-size: ${fs.small};
  margin-left: ${(props) => (props.index === 0 ? 0 : "3vw")};
  cursor: pointer;
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  transition: 0.5s;
  &:hover {
    color: ${(props) => props.theme.pink};
  }
`;
