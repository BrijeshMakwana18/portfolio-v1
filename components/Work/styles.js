import styled from "styled-components";
import { fonts, fs } from "../../utils/";
export const Container = styled.div`
  max-width: 100vw;
  padding: 16vh 0 15vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 400px) {
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) and (min-width: 400px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) and (min-width: 600px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 992px) and (min-width: 768px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (max-width: 1200px) {
  }
`;

export const Header = styled.div`
  font-size: ${fs.large};
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.pink};
  margin-top: 3vh;
`;

export const WorkItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3vh;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  width: 50%;
  padding-left: 2vw;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 2vh;
  }
`;

export const Title = styled.text`
  font-size: ${fs.medium};
  font-family: ${fonts.PoppinsBold};
  cursor: pointer;
  width: fit-content;
  color: ${(props) =>
    props.hover ? props.theme.blue : props.theme.primaryFont};
  transition: 1s;
`;

export const Info = styled.text`
  font-size: ${fs.small};
  margin-top: 2%;
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  opacity: 0.8;
  span {
    margin-left: 1vw;
    opacity: 0.4;
    font-size: 0.9rem;
  }
`;

export const TechContainer = styled.div`
  display: grid;
  flex-direction: row;
  align-items: center;
  column-gap: 2vw;
  width: fit-content;
  /* background-color: green; */
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  svg {
    height: 30px;
    width: 5vh;
  }
`;

export const TechItem = styled.text`
  font-size: 1rem;
  cursor: pointer;
  /* text-align: center; */
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.pink};
  /* opacity: 0.5; */
  margin-top: 2vh;
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
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  transition: 1s;
  svg {
    fill: ${(props) => props.theme.blue};
  }
  &:hover {
    transform: scale(1.1);
  }
`;
