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

export default function Experience({
  toggleTheme,
  theme,
  experienceRef,
  data,
  header,
}) {
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
        <Header>{header}</Header>
        {data.exp.map((item, index) => {
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
                {/* <span>
                  {item.startDate} - {item.endDate}
                </span> */}
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
          {data.skills.map((item, index) => {
            return <SkillItem key={index}>{item}</SkillItem>;
          })}
        </SkillItemContainer>
      </SkillsContainer>
    </Container>
  );
}
