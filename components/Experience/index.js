import React, { useState } from "react";
import { Icon } from "..";
import {
  Container,
  ExpContainer,
  SkillsContainer,
  SkillItemContainer,
  SkillItem,
  Company,
  Designation,
  DescContainer,
  Desc,
  Header,
  ExpItem,
} from "./styles";
const data = [
  {
    company: "Alshaya Group",
    info: "Alshaya Group is a dynamic family-owned enterprise, first established in Kuwait in 1890. With a consistent record of growth and innovation, Alshaya Group is one of the world’s leading brand franchise operators, offering an unparalleled choice of well-loved international brands to customers.",
    website: "https://www.alshaya.com",
    startDate: "Dec 2021",
    endDate: "Present",
    designation: "Software Engineer",
    desc: [
      "Write modern, performant, maintainable code for a diverse array of international brands like H&M, Victoria's Secret, Bath and Body Works",
      "Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React Native",
      "Communicate with multi-disciplinary teams of engineers, designers and stakeholders on a daily basis",
    ],
  },
];

const skills = [
  "Javascript",
  "React Native",
  "ReactJS",
  "Git",
  "NodeJS",
  "Express",
  "MongoDB",
];
export default function Experience({ toggleTheme, theme, experienceRef }) {
  const [expId, setExpId] = useState("");
  const onMouseEnter = (id) => {
    setExpId(id);
  };
  const onMouseLeave = () => {
    setExpId("");
  };

  return (
    <Container ref={experienceRef}>
      <ExpContainer className="exp-container">
        <Header>Experience</Header>
        {data.map((item, index) => {
          return (
            <ExpItem key={index} index={index}>
              <Company
                onClick={() => window.open(item.website, "_blank")}
                onMouseEnter={() => onMouseEnter(index)}
                onMouseLeave={() => onMouseLeave()}
                hover={expId === index}
                className="company-name"
              >
                {item.company}
              </Company>
              <Designation>
                {item.designation}{" "}
                <span>
                  {item.startDate} - {item.endDate}
                </span>
              </Designation>
              {item.desc.map((item, index) => {
                return (
                  <DescContainer key={index}>
                    {/* <Icon.Arrow /> */}
                    <Desc>{item}</Desc>
                  </DescContainer>
                );
              })}
            </ExpItem>
          );
        })}
      </ExpContainer>
      <SkillsContainer className="skills-container">
        <Header>Skills</Header>
        <SkillItemContainer className="skills-item">
          {skills.map((item, index) => {
            return <SkillItem key={index}>{item}</SkillItem>;
          })}
        </SkillItemContainer>
      </SkillsContainer>
    </Container>
  );
}
