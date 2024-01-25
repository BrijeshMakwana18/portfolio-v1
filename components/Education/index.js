import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "..";
import {
  Container,
  Header,
  EduItemContainer,
  EduItem,
  EduTitle,
  EduBoard,
  EduDuration,
  EduMarks,
} from "./styles";
const data = [
  {
    title: "B.E. in Information Technology",
    board: "Gujarat Technological University",
    duration: "05/2017 - 06/2021",
    cgpa: "CGPA   9.10",
  },
  {
    title: "Higher Secondary",
    board: "GHSEB",
    duration: "04/2015 - 04/2017",
    cgpa: "CGPA   6.4",
  },
];

export default function Education({ toggleTheme, theme, educationRef }) {
  return (
    <Container ref={educationRef}>
      <Header>Education</Header>
      <EduItemContainer>
        {data.map((item, index) => {
          return (
            <EduItem key={index}>
              <EduTitle>{item.title}</EduTitle>
              <EduBoard>{item.board}</EduBoard>
              <EduDuration>{item.duration}</EduDuration>
              <EduMarks>{item.cgpa}</EduMarks>
            </EduItem>
          );
        })}
      </EduItemContainer>
    </Container>
  );
}
