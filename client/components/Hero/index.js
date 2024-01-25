import { useEffect } from "react";
import Image from "next/image";
import { Icon } from "..";
import {
  Container,
  Heading,
  BigHeading,
  Desc,
  ResumeContainer,
  Resume,
  GithubContainer,
} from "./styles";
export default function Hero({ heroRef }) {
  return (
    <Container ref={heroRef}>
      <Heading>Hi, my name is</Heading>
      <BigHeading>Brijesh Makwana</BigHeading>
      <BigHeading opacity={0.7} fontSize={"2rem"}>
        I build exceptional digital experiences.
      </BigHeading>
      <Desc>
        {
          "I’m a software engineer specializing in building mobile apps and learning new tech every day. Currently, I’m focused on building an ERP Product."
        }
        {/* <span>Alshaya Group</span>. */}
      </Desc>
      <ResumeContainer>
        <Resume href={"/Brijesh_Makwana_Resume.pdf"} download>
          Resume
        </Resume>
        <GithubContainer
          href="http://github.com/BrijeshMakwana18"
          target={"_blank"}
        >
          <Icon.Github />
        </GithubContainer>
      </ResumeContainer>
    </Container>
  );
}
