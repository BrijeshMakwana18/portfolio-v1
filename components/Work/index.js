import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "..";
import {
  Container,
  Title,
  Info,
  TechContainer,
  TechItem,
  LinksContainer,
  LinkItem,
  Header,
  WorkItem,
  DetailsContainer,
  ImageContainer,
} from "./styles";
const data = [
  {
    title: "Victoria's Secret",
    image: "/vs-project.png",
    info: "Victoria’s Secret MENA app to shop online bras, panties, sleepwear, swim, beauty, accessories & so much more — anytime, anywhere. Victoria's Secret Most Wanted Bras: From delicate details and bold hues to the glamorous shine strap.",
    technologies: ["React Native", "Styled Components", "Algolia"],
    links: [
      {
        platform: "android",
        link: "https://play.google.com/store/apps/details?id=com.vs.mena",
      },
      {
        platform: "ios",
        link: "https://apps.apple.com/us/app/victorias-secret-middle-east/id1559906965",
      },
    ],
  },
  {
    title: "H&M",
    image: "/hm-project.png",
    info: "An e-commerce mobile app for MENA region with two differnet languages support English and Arabic for H&M brand.",
    technologies: ["React Native", "Styled Components", "Algolia"],
    links: [
      {
        platform: "android",
        link: "https://play.google.com/store/apps/details?id=com.vs.mena",
      },
      {
        platform: "ios",
        link: "https://apps.apple.com/us/app/victorias-secret-middle-east/id1559906965",
      },
    ],
  },
  {
    title: "Coinsheet",
    image: "/coinsheet-project.png",
    info: "Personalized expense manager to track down daily expenses and to get insights of spending habbits like needs, wants and investments.",
    technologies: [
      "React Native",
      "Styled Components",
      "NodeJS",
      "MongoDB",
      "Express",
    ],
    links: [],
  },
];

export default function Work({ toggleTheme, theme, workRef }) {
  const [workId, setWorkId] = useState("");
  const onMouseEnter = (id) => {
    setWorkId(id);
  };
  const onMouseLeave = () => {
    setWorkId("");
  };

  return (
    <Container ref={workRef}>
      <Header>Work</Header>
      {data.map((item, index) => {
        return (
          <WorkItem key={index} index={index}>
            <ImageContainer>
              <Image
                src={item.image}
                height={1080}
                width={1920}
                layout="responsive"
              />
            </ImageContainer>
            <DetailsContainer>
              <Title
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave()}
                hover={workId === index}
              >
                {item.title}
              </Title>

              <Info>{item.info}</Info>
              <TechContainer>
                {item.technologies.map((item, index) => {
                  return <TechItem key={index}>{item}</TechItem>;
                })}
              </TechContainer>
              <LinksContainer>
                {item.links.map((item, index) => {
                  return (
                    <LinkItem key={index} href={item.link} target="_blank">
                      {item.platform === "ios" ? (
                        <Icon.AppStore />
                      ) : (
                        <Icon.PlayStore />
                      )}
                    </LinkItem>
                  );
                })}
              </LinksContainer>
            </DetailsContainer>
          </WorkItem>
        );
      })}
    </Container>
  );
}
