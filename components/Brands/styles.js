import styled from "styled-components";
import { fonts, fs } from "../../utils";
export const Container = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
`;

export const BrandsTitle = styled.text`
  text-align: center;
  font-size: ${fs.small};
  text-transform: uppercase;
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  letter-spacing: 2px;
  a {
    font-family: ${fonts.PoppinsMedium};
    color: ${(props) => props.theme.pink};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const BrandsContainer = styled.div`
  background-color: ${(props) => props.theme.brandsContainer};
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
