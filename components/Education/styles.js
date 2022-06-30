import styled from "styled-components";
import { fonts, fs } from "../../utils/";
export const Container = styled.div`
  max-width: 100vw;
  padding: 20vh 0 15vh 0;
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

export const EduItemContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const EduItem = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
`;

export const EduTitle = styled.text`
  font-size: ${fs.medium};
  color: ${(props) => props.theme.primaryFont};
  font-family: ${fonts.PoppinsBold};
`;

export const EduBoard = styled.text`
  font-size: ${fs.small};
  color: ${(props) => props.theme.primaryFont};
  font-family: ${fonts.PoppinsMedium};
  margin-top: 1vh;
`;

export const EduDuration = styled.text`
  font-size: ${fs.small};
  color: ${(props) => props.theme.primaryFont};
  font-family: ${fonts.Poppins};
  margin-top: 1vh;
`;

export const EduMarks = styled.text`
  font-size: ${fs.medium};
  color: ${(props) => props.theme.blue};
  font-family: ${fonts.PoppinsBold};
  margin-top: 1vh;
`;
