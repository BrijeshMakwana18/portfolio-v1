import styled from "styled-components";
import { fonts, fs } from "../../utils/";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10vh 0vh 5vh 0vh;
  /* background-color: green; */
`;

export const Heading = styled.text`
  font-size: ${fs.medium};
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.blue};
`;

export const BigHeading = styled.text`
  font-size: ${(props) => (props.fontSize ? props.fontSize : fs.xxl)};
  font-family: ${fonts.PoppinsBold};
  color: ${(props) => props.theme.primaryFont};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  margin-top: 1vh;
  @media (max-width: 768px) {
    font-size: ${fs.large};
  }
`;

export const Desc = styled.p`
  font-size: ${fs.medium};
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
  opacity: 0.7;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
  margin-top: 2%;
  span {
    color: ${(props) => props.theme.pink};
    font-family: ${fonts.PoppinsMedium};
    cursor: pointer;
  }
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4vh;
`;

export const Resume = styled.a`
  cursor: pointer;
  height: 60px;
  width: 200px;
  border-radius: 0.3vw;
  /* border: 1px solid ${(props) => props.theme.blue}; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: transparent; */
  background: linear-gradient(
    315deg,
    var(--token-66dfdba2-b084-43a3-a18d-237c2893b6a7, rgb(153, 0, 255)) 0%,
    hsl(206, 100%, 53%) 100%
  );
  opacity: 1;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: rgba(18, 240, 252, 0.3) 0px 0px 0px 0px;

  color: ${(props) => props.theme.primaryFont};
  font-size: ${fs.large};
  font-family: ${fonts.PoppinsMedium};
  text-decoration: none;
  /* transition: 1s; */
  @media (max-width: 768px) {
    height: 40px;
    width: 160px;
    font-size: ${fs.small};
  }
`;

export const GithubContainer = styled.a`
  height: 50px;
  width: 50px;
  margin-left: 4vw;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.blue};
  }
`;
