import { useEffect } from "react";
import Image from "next/image";
import { Container, Heading, BigHeading, Desc, Resume } from "./styles";
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
          "I’m a software engineer specializing in building mobile apps and learning new tech every day. Currently, I’m focused on building e-commerce products at "
        }
        <span>Alshaya Group</span>.
      </Desc>
      <Resume>Resume</Resume>
    </Container>
  );
}
