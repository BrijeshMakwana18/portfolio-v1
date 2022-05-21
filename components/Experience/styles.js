import styled from "styled-components";
import { fonts, fs } from "../../utils/";
export const Container = styled.div`
  max-width: 100vw;
  padding: 20vh 0 15vh 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 400px) {
    flex-direction: column;
    .exp-container {
      width: 100%;
    }
    .skills-container {
      width: 100%;
      .skills-item {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 600px) and (min-width: 400px) {
    flex-direction: column;
    .exp-container {
      width: 100%;
    }
    .skills-container {
      width: 100%;
      .skills-item {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (max-width: 768px) and (min-width: 600px) {
    flex-direction: column;
    .exp-container {
      width: 100%;
    }
    .skills-container {
      width: 100%;
      .skills-item {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 992px) and (min-width: 768px) {
    flex-direction: column;
    .exp-container {
      width: 100%;
    }
    .skills-container {
      width: 100%;
      .skills-item {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (max-width: 1200px) {
  }
`;

export const ExpContainer = styled.div`
  width: 50%;
`;
export const SkillsContainer = styled.div`
  width: 45%;
`;

export const SkillItemContainer = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1vw;
  row-gap: 2vh;
`;
export const SkillItem = styled.div`
  height: 5vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props) => props.theme.card};
  font-size: ${fs.small};
  font-family: ${fonts.PoppinsMedium};
  text-align: center;
  cursor: pointer;
  color: ${(props) => props.theme.primaryFont};
  transition: 0.5s;
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
    background-color: ${(props) => props.theme.navbar};
  }
`;

export const Header = styled.div`
  font-size: 1.5rem;
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.pink};
  margin-top: 3vh;
`;

export const ExpItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
`;

export const Company = styled.text`
  font-size: 1.3rem;
  font-family: ${fonts.PoppinsBold};
  cursor: pointer;
  width: fit-content;
  color: ${(props) =>
    props.hover ? props.theme.blue : props.theme.primaryFont};
  transition: 1s;
`;

export const Designation = styled.text`
  font-size: 1rem;
  margin-top: 2%;
  font-family: ${fonts.PoppinsMedium};
  color: ${(props) => props.theme.primaryFont};
  span {
    margin-left: 1vw;
    opacity: 0.4;
    font-size: 0.9rem;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2vh;
  /* background-color: green; */
  justify-content: space-between;
  svg {
    height: 30px;
    width: 5vh;
  }
`;

export const Desc = styled.text`
  font-size: 1rem;
  /* margin-left: 2vw; */
  /* width: 95%; */
  font-family: ${fonts.Poppins};
  color: ${(props) => props.theme.primaryFont};
`;
